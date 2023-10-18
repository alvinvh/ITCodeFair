﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonInfrastructure.Models;

namespace BusinessLogicLayer.Interfaces
{
    public interface IMedicalRecordService
    {
        Task<MedicalRecordModel?> GetById(int MedicalRecordId);
        Task<List<MedicalRecordModel>> GetAll();

        Task<int> CreateMedicalRecord(MedicalRecordModel MedicalRecord);
        Task UpdateMedicalRecord(MedicalRecordModel MedicalRecord);
        Task DeleteMedicalRecord(int MedicalRecordId);
    }
}
