using Mafqoodati.Domain.Common;
using Mafqoodati.Domain.Entities;

namespace Mafqoodati.Domain.Events
{
    public class TodoItemCompletedEvent : DomainEvent
    {
        public TodoItemCompletedEvent(TodoItem item)
        {
            Item = item;
        }

        public TodoItem Item { get; }
    }
}
