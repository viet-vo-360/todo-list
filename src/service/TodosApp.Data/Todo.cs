﻿using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.Json.Serialization;

namespace TodoApp.Data
{
    public class Todo
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
