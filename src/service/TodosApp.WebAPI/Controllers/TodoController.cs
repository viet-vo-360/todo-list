using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoApp.Data;
using TodoApp.Data.Resources;
using TodoApp.Service.TodoService;


namespace TodoApp.WebAPI.Controllers
{
    [Route("/api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService _todoService;
        private readonly IMapper _mapper;

        public TodoController(ITodoService todoService, IMapper mapper)
        {
            _todoService = todoService;
            _mapper = mapper;
        }

        /// <summary>
        /// Lists all todo item.
        /// </summary>
        /// <returns>List of todo item.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<TodoResource>), 200)]
        public async Task<IEnumerable<TodoResource>> GetAllAsync()
        {
            var todos = await _todoService.ListAsync();
            var resources = _mapper.Map<IEnumerable<Todo>, IEnumerable<TodoResource>>(todos);
            return resources;
        }

        /// <summary>
        /// Saves a new todo item.
        /// </summary>
        /// <param name="resource">Todo data.</param>
        /// <returns>Response for the request.</returns>
        [HttpPost]
        [ProducesResponseType(typeof(TodoResource), 200)]
        [ProducesResponseType(typeof(ErrorResource), 400)]
        public async Task<IActionResult> PostAsync([FromForm] SaveToDoResource resource)
        {
            var todoItem = _mapper.Map<SaveToDoResource, Todo>(resource);
            var result = await _todoService.SaveAsync(todoItem);

            if (!result.Success)
            {
                return BadRequest(new ErrorResource(result.Message));
            }

            var todoResponse = _mapper.Map<Todo, TodoResource>(result.Resource);
            return Ok(todoResponse);
        }

        /// <summary>
        /// Updates an existing todo according to an identifier.
        /// </summary>
        /// <param name="id">Todo identifier.</param>
        /// <param name="resource">Updated todo data.</param>
        /// <returns>Response for the request.</returns>
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(TodoResource), 200)]
        [ProducesResponseType(typeof(ErrorResource), 400)]
        public async Task<IActionResult> PutAsync(string id, [FromBody] SaveToDoResource resource)
        {
            var category = _mapper.Map<SaveToDoResource, Todo>(resource);
            var result = await _todoService.UpdateAsync(id, category);

            if (!result.Success)
            {
                return BadRequest(new ErrorResource(result.Message));
            }

            var categoryResource = _mapper.Map<Todo, TodoResource>(result.Resource);
            return Ok(categoryResource);
        }
        
        /// <summary>
        /// Deletes a given category according to an identifier.
        /// </summary>
        /// <param name="id">Todo identifier.</param>
        /// <returns>Response for the request.</returns>
        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(TodoResource), 200)]
        [ProducesResponseType(typeof(ErrorResource), 400)]
        public async Task<IActionResult> DeleteAsync(string id)
        {
            var result = await _todoService.DeleteAsync(id);

            if (!result.Success)
            {
                return BadRequest(new ErrorResource(result.Message));
            }

            var categoryResource = _mapper.Map<Todo, TodoResource>(result.Resource);
            return Ok(categoryResource);
        }
    }
}
