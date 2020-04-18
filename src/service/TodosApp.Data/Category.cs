using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace TodoApp.Data
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<Todo> Todos { get; set; } = new List<Todo>();
    }
}
