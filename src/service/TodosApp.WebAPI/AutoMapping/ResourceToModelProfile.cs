using AutoMapper;
using TodoApp.Data;
using TodoApp.Data.Resources;

namespace TodoApp.WebAPI.AutoMapping
{
    public class ResourceToModelProfile : Profile
    {
        public ResourceToModelProfile()
        {
            CreateMap<SaveToDoResource, Todo>();
        }
    }
}
