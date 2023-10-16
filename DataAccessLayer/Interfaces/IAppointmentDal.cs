using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonInfrastructure.Models;

namespace DataAccessLayer.Interfaces
{
    public interface IAppointmentDal
    {
        // Getters
        AppointmentModel? GetById(int AppointmentId);
        List<AppointmentModel> GetAll();

        // Actions
        int CreateAppointment(AppointmentModel Appointment);
        void UpdateAppointment(AppointmentModel Appointment);
        void DeleteAppointment(int AppointmentId);
    }
}
