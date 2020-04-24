using System.Collections.Generic;
using System.Threading.Tasks;
using TodoApp.Data;
using TodoApp.Common.Helpers;
using TodoApp.Respository.TodoRepository;
using System;

namespace TodoApp.Service.TodoService
{
    public class TodoService : ITodoService
    {
        private readonly ITodoRepository _todoRepository;

        public TodoService(ITodoRepository todoRepository)
        {
            _todoRepository = todoRepository;
        }

        public async Task<TodoActionResponse> DeleteAsync(string key)
        {
            var existingTodo = await _todoRepository.FindByIdAsync(key);

            if (existingTodo == null)
            {
                return new TodoActionResponse($"An error occurred when deleting todo: Todo item not found");
            }

            try
            {
                _todoRepository.Remove(existingTodo);
                
                // save change
                await _todoRepository.CompleteAsync();
                return new TodoActionResponse(existingTodo);
            }
            catch (Exception ex)
            {
                return new TodoActionResponse($"An error occurred when deleting todo: {ex.Message}");
            }
        }

        public async Task<IEnumerable<Todo>> ListAsync()
        {
            await _todoRepository.CompleteAsync();

            return await _todoRepository.ListAsync();
        }

        public async Task<TodoActionResponse> SaveAsync(Todo todo)
        {
            try
            {
                // Check task is duplicate
                var isDuplicate = await _todoRepository.IsDuplicated(todo);
                
                if (isDuplicate)
                {
                    return new TodoActionResponse($"An error occurred when saving todo: Todo item is duplicated");
                }

                await _todoRepository.AddAsync(todo);
                // save change
                await _todoRepository.CompleteAsync();

                return new TodoActionResponse(todo);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new TodoActionResponse($"An error occurred when saving the todo: {ex.Message}");
            }
        }

        public async Task<TodoActionResponse> UpdateAsync(string key, Todo todo)
        {
            try
            {
                // find task
                var existingToDo = await _todoRepository.FindByIdAsync(key);

                if (existingToDo == null)
                {
                    return new TodoActionResponse($"An error occurred when update todo: Todo item not found");
                }
               
                // update task
                existingToDo.Title = todo.Title;
                existingToDo.Category = todo.Category;
                existingToDo.Date = todo.Date;
                existingToDo.IsImportant = todo.IsImportant;
                existingToDo.Completed = todo.Completed;

                _todoRepository.Update(existingToDo);
                // save change
                await _todoRepository.CompleteAsync();

                return new TodoActionResponse(todo);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new TodoActionResponse($"An error occurred when update todo: {ex.Message}");
            }
        }
    }
}
