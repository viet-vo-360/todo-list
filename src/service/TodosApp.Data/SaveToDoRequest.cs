using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TodoApp.Data
{
    public class SaveToDoRequest
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public string Date { get; set; }
        public Boolean IsImportant { get; set; }
    }
}
