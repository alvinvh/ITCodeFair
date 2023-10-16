using DataAccessLayer.Context.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using CommonInfrastructure.Models;

namespace DataAccessLayer.Maps
{
    public static class AppointmentMapExtensions
    {
        public static AppointmentModel ToAppointmentModel(this Appointment src)
        {
            var dst = new AppointmentModel();

            dst.AppointmentId = src.AppointmentId;
            dst.UserId = src.UserId;
            dst.UserName = src.UserName;
            dst.UserEmail = src.UserEmail;
            dst.UserPhone = src.UserPhone;
            dst.Message = src.Message;
            dst.Date_Time = src.Date_Time;
            dst.DoctorId = src.DoctorId;
            dst.Status = src.Status;

            return dst;
        }


        public static Appointment ToAppointment(this AppointmentModel src, Appointment dst = null)
        {
            if (dst == null)
            {
                dst = new Appointment();
            }

            dst.AppointmentId = src.AppointmentId;
            dst.UserId = src.UserId;
            dst.UserName = src.UserName;
            dst.UserEmail = src.UserEmail;
            dst.UserPhone = src.UserPhone;
            dst.Message = src.Message;
            dst.Date_Time = src.Date_Time;
            dst.DoctorId = src.DoctorId;
            dst.Status = src.Status;

            return dst;
        }
    }
}
