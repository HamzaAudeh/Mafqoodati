using Mafqoodati.Domain.Common;
using System.Threading.Tasks;

namespace Mafqoodati.Application.Common.Interfaces
{
    public interface IDomainEventService
    {
        Task Publish(DomainEvent domainEvent);
    }
}
