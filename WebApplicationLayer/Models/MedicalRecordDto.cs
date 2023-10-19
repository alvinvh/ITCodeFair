using CommonInfrastructure.Models;

namespace WebApplicationLayer.Models
{
    public class MedicalRecordDto
    {
        public int MedicalRecordId { get; set; } // int
        public int UserId { get; set; } // int
        public DateTime Date_Time { get; set; }
        public string Topic { get; set; }
        public string Description { get; set; } // nvarchar(400)
        public int DoctorId { get; set; }

    }

    public static class MedicalRecordDtoMapExtensions
    {
        public static MedicalRecordDto ToMedicalRecordDto(this MedicalRecordModel src)
        {
            var dst = new MedicalRecordDto();
            dst.MedicalRecordId = src.MedicalRecordId;
            dst.UserId = src.UserId;
            dst.Date_Time = src.Date_Time;
            dst.Topic = src.Topic;
            dst.Description = src.Description;
            dst.DoctorId = src.DoctorId;
            return dst;
        }

        public static MedicalRecordModel ToMedicalRecordModel(this MedicalRecordDto src)
        {
            var dst = new MedicalRecordModel();
            dst.MedicalRecordId = src.MedicalRecordId;
            dst.UserId = src.UserId;
            dst.Date_Time = src.Date_Time;
            dst.Topic = src.Topic;
            dst.Description = src.Description;
            dst.DoctorId = src.DoctorId;
            return dst;
        }
    }
}
