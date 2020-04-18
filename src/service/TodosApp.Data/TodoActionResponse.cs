using System;
using System.Collections.Generic;
using System.Text;

namespace TodoApp.Data
{
    public class TodoActionResponse : BaseResponse<Todo>
    {
        public TodoActionResponse(Todo todo) : base(todo) { }

        public TodoActionResponse(string message) : base(message) { }
    }
}
