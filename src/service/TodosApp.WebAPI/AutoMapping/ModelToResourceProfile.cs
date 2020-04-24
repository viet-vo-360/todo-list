using AutoMapper;
using TodoApp.Data;
using TodoApp.Data.Resources;

namespace TodoApp.WebAPI.AutoMapping
{
    public class ModelToResourceProfile : Profile
    {
        public ModelToResourceProfile()
        {
            CreateMap<Todo, TodoResource>();
        }
    }
}
