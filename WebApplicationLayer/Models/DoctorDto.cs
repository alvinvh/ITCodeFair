using CommonInfrastructure.Models;

namespace WebApplicationLayer.Models
{
    public class DoctorDto
    {
        public int DoctorId { get; set; } // int
        public string DoctorName { get; set; } // nvarchar(400)
        public string Image_url { get; set; }
        public string Specialist { get; set; } // nvarchar(400)
        public string Qualification { get; set; } // nvarchar(400)
        public string Certification { get; set; } // nvarchar(400)
        public string Education { get; set; } // nvarchar(400)
        public string Description { get; set; } // nvarchar(400)
        public string Availability { get; set; } // nvarchar(400)

    }

    public static class DoctorDtoMapExtensions
    {
        public static DoctorDto ToDoctorDto(this DoctorModel src)
        {
            var dst = new DoctorDto();
            dst.DoctorId = src.DoctorId;
            dst.DoctorName = src.DoctorName;
            dst.Image_url = src.Image_url;
            dst.Specialist = src.Specialist;
            dst.Qualification = src.Qualification;
            dst.Certification = src.Certification;
            dst.Education = src.Education;
            dst.Description = src.Description;
            dst.Availability = src.Availability;
            return dst;
        }

        public static DoctorModel ToDoctorModel(this DoctorDto src)
        {
            var dst = new DoctorModel();
            dst.DoctorId = src.DoctorId;
            dst.DoctorName = src.DoctorName;
            dst.Image_url = src.Image_url;
            dst.Specialist = src.Specialist;
            dst.Qualification = src.Qualification;
            dst.Certification = src.Certification;
            dst.Education = src.Education;
            dst.Description = src.Description;
            dst.Availability = src.Availability;
            return dst;
        }
    }
}
