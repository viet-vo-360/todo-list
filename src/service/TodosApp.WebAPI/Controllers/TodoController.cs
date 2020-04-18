using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TodoApp.Service.TodoService;
using TodoApp.Data;
using AutoMapper;

namespace TodoApp.WebAPI.Controllers
{
    [Route("/api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ILogger<TodoController> _logger;
        private readonly ITodoService _todoService;
        private readonly IMapper _mapper;

        public TodoController(ILogger<TodoController> logger, ITodoService todoService, IMapper mapper)
        {
            _logger = logger;
            _todoService = todoService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<Todo>> GetAllAsync()
        {
            var todos = await _todoService.ListAsync();
            return todos;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromQuery] SaveToDoRequest query)
        {
            var todoItem = _mapper.Map<SaveToDoRequest, Todo>(query);
            var result = await _todoService.SaveAsync(todoItem);
            
            if (!result.Success)
            {
                return BadRequest(new ErrorResponse(result.Message));
            }

            var todoResponse = _mapper.Map<Todo, TodoResponse>(result.Resource);
            return Ok(todoResponse);
        }
    }
}
