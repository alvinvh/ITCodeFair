// using Microsoft.EntityFrameworkCore;
// using Microsoft.AspNetCore.Authentication.Negotiate;
// ---------------------------------------------------- 
// ---------------------------------------------------- 
// ---------------------------------------------------- 
using DataAccessLayer.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

var connection = builder.Configuration.GetConnectionString("DefaultConnection");

// builder.Services.AddDbContext<AuthDbContext>(options => options.UseSqlServer(connection, b => b.MigrationsAssembly("DataAccessLayer")));
builder.Services.AddDbContext<DBEntitiesContext>(options => options.UseSqlServer(connection, b => b.MigrationsAssembly("DataAccessLayer")));
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
.AddCookie(options =>
{
    options.Events.OnRedirectToLogin = (context) =>
    {
        // 401 - Unauthorised response 
        context.Response.StatusCode = 401;
        return Task.CompletedTask;
    };
});


builder.Services.AddControllersWithViews();

builder.Services.AddSwaggerGen();

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        options.RoutePrefix = string.Empty;
    });
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
// ---------------------------------------------------- 
// ---------------------------------------------------- 
// ---------------------------------------------------- 

// var builder = WebApplication.CreateBuilder(args);

// // Add services to the container.
// var projectDevelopmentCorsOptions = "_projectDevelopmentCorsOptions";
// var cnn = builder.Configuration.GetConnectionString("DefaultConnection");
// // Add services to the container.
// builder.Services.AddDbContext<DBEntitiesContext>(options => options.UseSqlServer(cnn, b => b.MigrationsAssembly("2DataAccessLayer")));

// builder.Services.AddCors(options =>
// {
//     options.AddPolicy(name: projectDevelopmentCorsOptions, policy =>
//     {
//         policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3033", "http://localhost:3034", "http://localhost:4173", "http://localhost:4200").AllowCredentials();
//     });
// });

// builder.Services.AddAuthentication(NegotiateDefaults.AuthenticationScheme)
//    .AddNegotiate();

// builder.Services.AddControllers()
//     .AddNewtonsoftJson(options =>
//     {
//         options.SerializerSettings.ContractResolver = new DefaultContractResolver();
//     });
// // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();


// #region CUSTOM SERVICES [D-I]

// //add common services DI
// builder.Services.AddTransient<ILoggingService, LoggingService>();
// //IHttpContextAccessor
// builder.Services.AddHttpContextAccessor();
// builder.Services.AddTransient<IUserNameResolver, UserNameResolver>();


// Bootstrap.Initialize(builder.Services, builder.Configuration);

// //builder.Services.AddScoped<IDataAccessService, DataAccessService>();
// //builder.Services.AddScoped<ICategoryService, CategoryService>();
// //services.AddScoped<IApplicant_Service, Applicant_Service>();
// //services.AddScoped<IGrade_Service, Grade_Service>();
// //services.AddScoped<IApplication_Service, Application_Service>();
// //services.AddScoped<IApplicationStatus_Service, ApplicationStatus_Service>();
// #endregion

// var app = builder.Build();

// // Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
//     app.UseCors(projectDevelopmentCorsOptions);
// }

// app.UseHttpsRedirection();
// app.UseAuthentication();
// app.UseAuthorization();
// //app.UseMiddleware<ExceptionHandlingMiddleware>();
// // var logger = app.Services.GetRequiredService<ILoggingService>();
// // app.ConfigureExceptionHandler(logger);

// app.MapControllers();

// app.Run();