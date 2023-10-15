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
    public static class DoctorMapExtensions
    {
        public static DoctorModel ToDoctorModel(this Doctor src)
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


        public static Doctor ToDoctor(this DoctorModel src, Doctor dst = null)
        {
            if (dst == null)
            {
                dst = new Doctor();
            }

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
