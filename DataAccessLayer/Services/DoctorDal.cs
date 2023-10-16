using DataAccessLayer.Context;
using DataAccessLayer.Context.Models;
using DataAccessLayer.Interfaces;
using DataAccessLayer.Maps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonInfrastructure.Models;

namespace DataAccessLayer.Services
{
    public class AppointmentDal : IAppointmentDal
    {
        //private readonly TestDBEntities context;
        private DBEntitiesContext _db;
        public AppointmentDal(DBEntitiesContext dbctx)
        {
            this._db = dbctx; // new TestDBEntities();
        }


        public List<AppointmentModel> GetAll()
        {
            var result = _db.Appointments.ToList();

            var returnObject = new List<AppointmentModel>();
            foreach (var item in result)
            {
                returnObject.Add(item.ToAppointmentModel());
            }

            return returnObject;
        }

        public AppointmentModel? GetById(int AppointmentId)
        {
            var result = _db.Appointments.SingleOrDefault(x => x.AppointmentId == AppointmentId);
            return result?.ToAppointmentModel();
        }


        public int CreateAppointment(AppointmentModel Appointment)
        {
            var newAppointment = Appointment.ToAppointment();
            _db.Appointments.Add(newAppointment);
            _db.SaveChanges();
            return newAppointment.AppointmentId;
        }


        public void UpdateAppointment(AppointmentModel Appointment)
        {
            var existingAppointment = _db.Appointments
                .SingleOrDefault(x => x.AppointmentId == Appointment.AppointmentId);

            if (existingAppointment == null)
            {
                throw new ApplicationException($"Appointment {Appointment.AppointmentId} does not exist.");
            }
            Appointment.ToAppointment(existingAppointment);

            _db.Update(existingAppointment);
            _db.SaveChanges();
        }

        public void DeleteAppointment(int AppointmentId)
        {
            var efModel = _db.Appointments.Find(AppointmentId);
            _db.Appointments.Remove(efModel);
            _db.SaveChanges();


        }

    }

}
