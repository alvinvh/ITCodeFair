using DataAccessLayer.Interfaces;
using BusinessLogicLayer.Interfaces;
using CommonInfrastructure.Models;

namespace BusinessLogicLayer.Services
{
    public class MedicalRecordService :  IMedicalRecordService
    {
        private readonly IMedicalRecordDal _MedicalRecordDal;
        //private readonly IMedicalRecordBalService _MedicalRecordBalService;
        public MedicalRecordService(IMedicalRecordDal MedicalRecordDal
        //ILoggingService loggingService,
        //IMedicalRecordDal MedicalRecordDal,
        //IAuditDal auditDal
       // IMedicalRecordBalanceService balsvc
        ) 
        {
            _MedicalRecordDal = MedicalRecordDal;
            // _MedicalRecordBalService = balsvc;
        }

        public async Task<MedicalRecordModel?> GetById(int MedicalRecordId)
        {           
            return _MedicalRecordDal.GetById(MedicalRecordId);
        }

        public async Task<List<MedicalRecordModel>> GetAll()
        {            
            return _MedicalRecordDal.GetAll();
        }

        public async Task<int> CreateMedicalRecord(MedicalRecordModel MedicalRecord)
        {
            //write validations here
            var newMedicalRecordId = _MedicalRecordDal.CreateMedicalRecord(MedicalRecord);
            return newMedicalRecordId;
        }

        public async Task UpdateMedicalRecord(MedicalRecordModel MedicalRecord)
        {
            //write validations here 
            _MedicalRecordDal.UpdateMedicalRecord(MedicalRecord);
        }

        public async Task DeleteMedicalRecord(int MedicalRecordId)
        {            
            try
            {
                //if(balservice.getBal(MedicalRecordId) = 0)
                _MedicalRecordDal.DeleteMedicalRecord(MedicalRecordId);
            }
            catch (Exception e)
            {
                //_loggingService.WriteLog(LoggingLevel.Error, "Layer", $"Error delete MedicalRecord Id:{MedicalRecordId}. {e.Message}", e.StackTrace);
            }
        }
    }
}
