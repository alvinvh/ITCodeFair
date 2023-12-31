﻿using DataAccessLayer.Interfaces;
using DataAccessLayer.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DataAccessLayer.Ioc
{
    public static class Init
    {
        public static void InitializeDependencies(IServiceCollection services, IConfiguration configuration)
        {            
            //services.AddScoped<IAuditDal, AuditDal>();
            //services.AddScoped<IApplicationLogDal, ApplicationLogDal>();
            //services.AddScoped<IAuthDal, AuthDal>();
            //services.AddScoped<ICodeDal, CodeDal>();
            //services.AddScoped<IConfigurationDal, ConfigurationDal>();
            //services.AddScoped<IDocumentDataDal, DocumentDataDal>();
            //services.AddScoped<IDocumentDataTempDal, DocumentDataTempDal>();
            //services.AddScoped<IUserDal, UserDal>();
            
            services.AddScoped<IDoctorDal, DoctorDal>();
            services.AddScoped<IAppointmentDal, AppointmentDal>();
            services.AddScoped<IMedicalRecordDal, MedicalRecordDal>();



        }
    }
}
