using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonInfrastructure.Models;

namespace DataAccessLayer.Interfaces
{
    public interface IMedicalRecordDal
    {
        // Getters
        List<MedicalRecordModel>? GetById(int UserId);
        List<MedicalRecordModel> GetAll();

        // Actions
        int CreateMedicalRecord(MedicalRecordModel MedicalRecord);
        void UpdateMedicalRecord(MedicalRecordModel MedicalRecord);
        void DeleteMedicalRecord(int MedicalRecordId);
    }
}
