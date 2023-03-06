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
using MediatR;
using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly ILogger<ActivitiesController> _logger;
        private readonly IMediator _mediator;

        public ActivitiesController(ILogger<ActivitiesController> logger, IMediator mediator)
        {
            _mediator = mediator;
            _logger = logger;
        }

        // Get all acitivities from the data context
        [HttpGet]
        public async Task<ActionResult<List<Domain.Activity>>> GetActivities()
        {
            return await _mediator.Send(new List.Query());
        }

        // Get a specific activity using a specified id for the required acitvity.
        [HttpGet("{id}")]
        public async Task<ActionResult<Domain.Activity>> GetActivity(Guid id)
        {
            return Ok();
        }
    }
}