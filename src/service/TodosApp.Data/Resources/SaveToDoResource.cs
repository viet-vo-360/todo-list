using System;
using System.ComponentModel.DataAnnotations;

namespace TodoApp.Data.Resources
{
    public class SaveToDoResource
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public Category Category { get; set; }
        [Required]
        public string Date { get; set; }
        public Boolean IsImportant { get; set; }
    }
}
