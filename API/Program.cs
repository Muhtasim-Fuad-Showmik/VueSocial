using Persistence;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application.Activities;
using AutoMapper;
using Application.Core;
using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration);

var app = builder.Build();

// Create a common service provider
var serviceProvider = builder.Services.BuildServiceProvider();
// Create a scope variable so that it gets disposed off when no longer needed
using var scope = serviceProvider.CreateScope();
try {
    // Attempt to migrate the database from our context 
    var context = serviceProvider.GetRequiredService<DataContext>();
    await context.Database.MigrateAsync();
    await Seed.SeedData(context);
} catch (Exception ex) {
    // Log exceptions that have been caught in the preceding try block above
    var logger = serviceProvider.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occured during migration");
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Access by heading to [API URL]/swagger/index.html
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
