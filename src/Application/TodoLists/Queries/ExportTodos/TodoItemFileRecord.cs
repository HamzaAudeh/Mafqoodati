using Mafqoodati.Application.Common.Mappings;
using Mafqoodati.Domain.Entities;

namespace Mafqoodati.Application.TodoLists.Queries.ExportTodos
{
    public class TodoItemRecord : IMapFrom<TodoItem>
    {
        public string Title { get; set; }

        public bool Done { get; set; }
    }
}
