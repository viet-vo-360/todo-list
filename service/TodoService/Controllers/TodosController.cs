using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Mvc;
using TodoService.Models;
namespace TodoService.Controllers
{
    public class TodosController : Controller
    {
        // GET: Todos
        public JsonResult List()
        {
            List<Todos> todoList = new List<Todos>()
            {
                new Todos
                {
                    Key = Guid.NewGuid().ToString(),
                    Title = "Do Housecleaning",
                    Date = DateTime.Now.ToString("MM/dd/yyyy"),
                    Category = "Word",
                    Completed = false,
                    IsImportant = true,
                    IsChecked = false
                },
                new Todos
                {
                    Key = Guid.NewGuid().ToString(),
                    Title = "Go shopping with friend",
                    Date = DateTime.Now.ToString("MM/dd/yyyy"),
                    Category = "Shopping",
                    Completed = false,
                    IsImportant = true,
                    IsChecked = false
                },
                new Todos
                {
                    Key = Guid.NewGuid().ToString(),
                    Title = "Saving money",
                    Date = DateTime.Now.ToString("MM/dd/yyyy"),
                    Category = "Other",
                    Completed = false,
                    IsImportant = true,
                    IsChecked = false
                }
            };
            return Json(todoList, JsonRequestBehavior.AllowGet);
        }
    }
}