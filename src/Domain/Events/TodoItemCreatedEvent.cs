using Mafqoodati.Domain.Common;
using Mafqoodati.Domain.Entities;

namespace Mafqoodati.Domain.Events
{
    public class TodoItemCreatedEvent : DomainEvent
    {
        public TodoItemCreatedEvent(TodoItem item)
        {
            Item = item;
        }

        public TodoItem Item { get; }
    }
}
