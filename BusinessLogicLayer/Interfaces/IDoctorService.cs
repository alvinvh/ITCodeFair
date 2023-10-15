using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonInfrastructure.Models;

namespace BusinessLogicLayer.Interfaces
{
    public interface IDoctorService
    {
        Task<DoctorModel?> GetById(int DoctorId);
        Task<List<DoctorModel>> GetAll();

        Task<int> CreateDoctor(DoctorModel Doctor);
        Task UpdateDoctor(DoctorModel Doctor);
        Task DeleteDoctor(int DoctorId);
    }
}
