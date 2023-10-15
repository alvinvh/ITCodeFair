using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonInfrastructure.Models;

namespace DataAccessLayer.Interfaces
{
    public interface IDoctorDal
    {
        // Getters
        DoctorModel? GetById(int DoctorId);
        List<DoctorModel> GetAll();

        // Actions
        int CreateDoctor(DoctorModel Doctor);
        void UpdateDoctor(DoctorModel Doctor);
        void DeleteDoctor(int DoctorId);
    }
}
