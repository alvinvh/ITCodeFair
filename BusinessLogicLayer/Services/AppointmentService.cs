using DataAccessLayer.Interfaces;
using BusinessLogicLayer.Interfaces;
using CommonInfrastructure.Models;

namespace BusinessLogicLayer.Services
{
    public class AppointmentService :  IAppointmentService
    {
        private readonly IAppointmentDal _AppointmentDal;
        //private readonly IAppointmentBalService _AppointmentBalService;
        public AppointmentService(IAppointmentDal AppointmentDal
        //ILoggingService loggingService,
        //IAppointmentDal AppointmentDal,
        //IAuditDal auditDal
       // IAppointmentBalanceService balsvc
        ) 
        {
            _AppointmentDal = AppointmentDal;
            // _AppointmentBalService = balsvc;
        }

        public async Task<AppointmentModel?> GetById(int AppointmentId)
        {           
            return _AppointmentDal.GetById(AppointmentId);
        }

        public async Task<List<AppointmentModel>> GetAll()
        {            
            return _AppointmentDal.GetAll();
        }

        public async Task<int> CreateAppointment(AppointmentModel Appointment)
        {
            //write validations here
            var newAppointmentId = _AppointmentDal.CreateAppointment(Appointment);
            return newAppointmentId;
        }

        public async Task UpdateAppointment(AppointmentModel Appointment)
        {
            //write validations here 
            _AppointmentDal.UpdateAppointment(Appointment);
        }

        public async Task DeleteAppointment(int AppointmentId)
        {            
            try
            {
                //if(balservice.getBal(AppointmentId) = 0)
                _AppointmentDal.DeleteAppointment(AppointmentId);
            }
            catch (Exception e)
            {
                //_loggingService.WriteLog(LoggingLevel.Error, "Layer", $"Error delete Appointment Id:{AppointmentId}. {e.Message}", e.StackTrace);
            }
        }
    }
}
