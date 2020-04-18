using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TodoApp.Data;
using TodoApp.Respository.Context;
using Microsoft.EntityFrameworkCore;

namespace TodoApp.Respository.TodoRepository
{
    public class TodoRepository : BaseRepository, ITodoRepository
    {
        public TodoRepository(TodoAppContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Todo>> ListAsync()
        {
            return await _context.Todos.ToListAsync();
        }


        public async Task<Todo> FindByIdAsync(string key)
        {
            return await _context.Todos.FindAsync(key);
        }

        public async Task AddAsync(Todo todo)
        {
            await _context.Todos.AddAsync(todo);
        }

        public  void Update(Todo todo)
        {
            _context.Todos.Update(todo);
        }

        public void Remove(Todo todo)
        {
            _context.Todos.Remove(todo);
        }

        public async Task<bool> IsDuplicated(Todo todo)
        {
            return await _context.Todos.FirstOrDefaultAsync(item => item.Title == todo.Title && item.Category == todo.Category && item.Date == todo.Date && !item.Completed) != null;
            
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
