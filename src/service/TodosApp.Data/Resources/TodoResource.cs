using System;

namespace TodoApp.Data.Resources
{
    public class TodoResource
    {
        public string Key { get; set; }
        public string Title { get; set; }
        public Category Category { get; set; }
        public string Date { get; set; }
        public Boolean Completed { get; set; } = false;
        public Boolean IsImportant { get; set; } = false;
        public Boolean IsChecked { get; set; } = false;
        public int DataIndex { get; set; } = 0;
    }
}
