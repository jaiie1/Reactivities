using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public DateTime? Date { get; set; }
            public string City { get; set; }
            public string Venue { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                var activites = await _context.Activities.FindAsync(request.Id);
                if(activites == null){
                    throw new Exception("Could not find activites");
                }

                activites.Title = request.Title ?? activites.Title;
                activites.Description = request.Description ?? activites.Description;
                activites.Category = request.Category ?? activites.Category;
                activites.Date = request.Date ?? activites.Date;
                activites.City = request.City ?? activites.City;
                activites.Venue = request.Venue ?? activites.Venue;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}