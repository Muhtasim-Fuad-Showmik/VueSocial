using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Persistence;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly ILogger<ActivitiesController> _logger;
        private readonly DataContext _context;

        public ActivitiesController(ILogger<ActivitiesController> logger, DataContext context)
        {
            _logger = logger;
            _context = context;
        }

        // Get all acitivities from the data context
        [HttpGet]
        public async Task<ActionResult<List<Domain.Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        // Get a specific activity using a specified id for the required acitvity.
        [HttpGet("{id}")]
        public async Task<ActionResult<Domain.Activity>> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }
    }
}