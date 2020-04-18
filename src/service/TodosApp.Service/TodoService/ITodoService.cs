
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoApp.Data;

namespace TodoApp.Service.TodoService
{
    public interface ITodoService
    {
        Task<IEnumerable<Todo>> ListAsync();
        Task<TodoActionResponse> SaveAsync(Todo todo);
        Task<TodoActionResponse> UpdateAsync(string key, Todo todo);
        Task<TodoActionResponse> DeleteAsync(string key);
    }
}
