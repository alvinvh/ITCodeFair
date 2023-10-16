using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonInfrastructure.Models;

namespace BusinessLogicLayer.Interfaces
{
    public interface IAppointmentService
    {
        Task<AppointmentModel?> GetById(int AppointmentId);
        Task<List<AppointmentModel>> GetAll();

        Task<int> CreateAppointment(AppointmentModel Appointment);
        Task UpdateAppointment(AppointmentModel Appointment);
        Task DeleteAppointment(int AppointmentId);
    }
}
