using DataAccessLayer.Interfaces;
using BusinessLogicLayer.Interfaces;
using CommonInfrastructure.Models;

namespace BusinessLogicLayer.Services
{
    public class DoctorService :  IDoctorService
    {
        private readonly IDoctorDal _DoctorDal;
        //private readonly IDoctorBalService _DoctorBalService;
        public DoctorService(IDoctorDal DoctorDal
        //ILoggingService loggingService,
        //IDoctorDal DoctorDal,
        //IAuditDal auditDal
       // IDoctorBalanceService balsvc
        ) 
        {
            _DoctorDal = DoctorDal;
            // _DoctorBalService = balsvc;
        }

        public async Task<DoctorModel?> GetById(int DoctorId)
        {           
            return _DoctorDal.GetById(DoctorId);
        }

        public async Task<List<DoctorModel>> GetAll()
        {            
            return _DoctorDal.GetAll();
        }

        public async Task<int> CreateDoctor(DoctorModel Doctor)
        {
            //write validations here
            var newDoctorId = _DoctorDal.CreateDoctor(Doctor);
            return newDoctorId;
        }

        public async Task UpdateDoctor(DoctorModel Doctor)
        {
            //write validations here 
            _DoctorDal.UpdateDoctor(Doctor);
        }

        public async Task DeleteDoctor(int DoctorId)
        {            
            try
            {
                //if(balservice.getBal(DoctorId) = 0)
                _DoctorDal.DeleteDoctor(DoctorId);
            }
            catch (Exception e)
            {
                //_loggingService.WriteLog(LoggingLevel.Error, "Layer", $"Error delete Doctor Id:{DoctorId}. {e.Message}", e.StackTrace);
            }
        }
    }
}
