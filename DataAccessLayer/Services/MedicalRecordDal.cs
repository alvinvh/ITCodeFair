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
    public class MedicalRecordDal : IMedicalRecordDal
    {
        //private readonly TestDBEntities context;
        private DBEntitiesContext _db;
        public MedicalRecordDal(DBEntitiesContext dbctx)
        {
            this._db = dbctx; // new TestDBEntities();
        }


        public List<MedicalRecordModel> GetAll()
        {
            var result = _db.MedicalRecords.ToList();

            var returnObject = new List<MedicalRecordModel>();
            foreach (var item in result)
            {
                returnObject.Add(item.ToMedicalRecordModel());
            }

            return returnObject;
        }

        public List<MedicalRecordModel>? GetById(int UserId)
        {
            //var result = _db.MedicalRecords.SingleOrDefault(x => x.UserId == UserId);
            //return result?.ToMedicalRecordModel();
            var results = _db.MedicalRecords.Where(x => x.UserId == UserId).Select(x => x.ToMedicalRecordModel()).ToList();
            return results;
        }


        public int CreateMedicalRecord(MedicalRecordModel MedicalRecord)
        {
            var newMedicalRecord = MedicalRecord.ToMedicalRecord();
            _db.MedicalRecords.Add(newMedicalRecord);
            _db.SaveChanges();
            return newMedicalRecord.MedicalRecordId;
        }


        public void UpdateMedicalRecord(MedicalRecordModel MedicalRecord)
        {
            var existingMedicalRecord = _db.MedicalRecords
                .SingleOrDefault(x => x.MedicalRecordId == MedicalRecord.MedicalRecordId);

            if (existingMedicalRecord == null)
            {
                throw new ApplicationException($"MedicalRecord {MedicalRecord.MedicalRecordId} does not exist.");
            }
            MedicalRecord.ToMedicalRecord(existingMedicalRecord);

            _db.Update(existingMedicalRecord);
            _db.SaveChanges();
        }

        public void DeleteMedicalRecord(int MedicalRecordId)
        {
            var efModel = _db.MedicalRecords.Find(MedicalRecordId);
            _db.MedicalRecords.Remove(efModel);
            _db.SaveChanges();


        }

    }

}
