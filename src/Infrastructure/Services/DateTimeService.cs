using Mafqoodati.Application.Common.Interfaces;
using System;

namespace Mafqoodati.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
