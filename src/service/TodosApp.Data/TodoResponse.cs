using System;
using System.Collections.Generic;
using System.Text;

namespace TodoApp.Data
{
    public class TodoResponse
    {
        public string Key { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string Date { get; set; }
        public Boolean Completed { get; set; }
        public Boolean IsImportant { get; set; }
        public Boolean IsChecked { get; set; }
        public int DataIndex { get; set; }
    }
}
