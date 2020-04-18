using System;
using System.Collections.Generic;
using System.Text;

namespace TodoApp.Data
{
    public class ErrorResponse
    {
        public bool Success => false;
        public List<string> Messages { get; private set; }

        public ErrorResponse(List<string> messages)
        {
            this.Messages = messages ?? new List<string>();
        }

        public ErrorResponse(string message)
        {
            this.Messages = new List<string>();

            if (!string.IsNullOrWhiteSpace(message))
            {
                this.Messages.Add(message);
            }
        }
    }
}
