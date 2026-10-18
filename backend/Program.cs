var builder = WebApplication.CreateBuilder(args);

// === 1. REGISTER SERVICES HERE (The Brain) ===
builder.Services.AddControllers();

// This is the missing line that fixes your crash!
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// === 2. CONFIGURE MIDDLEWARE PIPELINE (The Body) ===
if (app.Environment.IsDevelopment())
{
    // These run smoothly now because the services above are registered
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
