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
    public static class MedicalRecordMapExtensions
    {
        public static MedicalRecordModel ToMedicalRecordModel(this MedicalRecord src)
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


        public static MedicalRecord ToMedicalRecord(this MedicalRecordModel src, MedicalRecord dst = null)
        {
            if (dst == null)
            {
                dst = new MedicalRecord();
            }

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
