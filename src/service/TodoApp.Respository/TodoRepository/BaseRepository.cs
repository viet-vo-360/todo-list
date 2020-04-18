using System;
using System.Collections.Generic;
using System.Text;
using TodoApp.Respository.Context;

namespace TodoApp.Respository.TodoRepository
{

    public abstract class BaseRepository
    {
        protected readonly TodoAppContext _context;

        public BaseRepository(TodoAppContext context)
        {
            _context = context;
        }
    }
}
