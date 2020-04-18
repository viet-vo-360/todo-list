
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoApp.Data;

namespace TodoApp.Respository.TodoRepository
{
    public interface ITodoRepository
    {
        Task<Todo> FindByIdAsync(string key);
        Task<bool> IsDuplicated(Todo todo);
        Task<IEnumerable<Todo>> ListAsync();
        Task AddAsync(Todo todo);
        void Update(Todo todo);
        void Remove(Todo todo);
        Task CompleteAsync();
    }
}
