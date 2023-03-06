using Persistence;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application.Activities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<DataContext>(options => {
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(policyBuilder =>
    policyBuilder.AddPolicy("CorsPolicy", policy =>
        policy.WithOrigins("http://localhost:3000","http://127.0.0.1:5173")
            .AllowAnyHeader()
            .AllowAnyHeader())
);
builder.Services.AddMediatR(typeof(List.Handler).Assembly);

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
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");

// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
