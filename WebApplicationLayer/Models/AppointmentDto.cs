using CommonInfrastructure.Models;

namespace WebApplicationLayer.Models
{
    public class AppointmentDto
    {
        public int AppointmentId { get; set; } // int
        public int UserId { get; set; } // int
        public string UserName { get; set; } // nvarchar(400)
        public string UserEmail { get; set; }
        public string UserPhone { get; set; } // nvarchar(400)
        public string Message { get; set; } // nvarchar(400)
        public DateTime Date_Time { get; set; } // nvarchar(400)
        public int DoctorId { get; set; } // nvarchar(400)
        public Boolean Status { get; set; } // nvarchar(400)

    }

    public static class AppointmentDtoMapExtensions
    {
        public static AppointmentDto ToAppointmentDto(this AppointmentModel src)
        {
            var dst = new AppointmentDto();
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

        public static AppointmentModel ToAppointmentModel(this AppointmentDto src)
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
    }
}
