using DataAccessLayer.Context;
using DataAccessLayer.Context.Models;
using DataAccessLayer.Interfaces;
using DataAccessLayer.Maps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Services
{
    public class DoctorDal : IDoctorDal
    {
        //private readonly TestDBEntities context;
        private DBEntitiesContext _db;
        public DoctorDal(DBEntitiesContext dbctx)
        {
            this._db = dbctx; // new TestDBEntities();
        }


        public List<DoctorModel> GetAll()
        {
            var result = _db.Doctors.ToList();

            var returnObject = new List<DoctorModel>();
            foreach (var item in result)
            {
                returnObject.Add(item.ToDoctorModel());
            }

            return returnObject;
        }

        public DoctorModel? GetById(int DoctorId)
        {
            var result = _db.Doctors.SingleOrDefault(x => x.DoctorId == DoctorId);
            return result?.ToDoctorModel();
        }


        public int CreateDoctor(DoctorModel Doctor)
        {
            var newDoctor = Doctor.ToDoctor();
            _db.Doctors.Add(newDoctor);
            _db.SaveChanges();
            return newDoctor.DoctorId;
        }


        public void UpdateDoctor(DoctorModel Doctor)
        {
            var existingDoctor = _db.Doctors
                .SingleOrDefault(x => x.DoctorId == Doctor.DoctorId);

            if (existingDoctor == null)
            {
                throw new ApplicationException($"Doctor {Doctor.DoctorId} does not exist.");
            }
            Doctor.ToDoctor(existingDoctor);

            _db.Update(existingDoctor);
            _db.SaveChanges();
        }

        public void DeleteDoctor(int DoctorId)
        {
            var efModel = _db.Doctors.Find(DoctorId);
            _db.Doctors.Remove(efModel);
            _db.SaveChanges();


        }

    }

}
