using DataAccessLayer.Services;
using BusinessLogicLayer.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplicationLayer.Models;

namespace WebApplication3tierApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class AppointmentController : ControllerBase
    {

        private readonly IAppointmentService _AppointmentService;
        private readonly ILogger<AppointmentController> _logger;

        public AppointmentController(IAppointmentService AppointmentService, ILogger<AppointmentController> logger)
        {
            _AppointmentService = AppointmentService;
            _logger = logger;
        }

        [HttpGet("", Name = "GetAllAppointments")]
        public async Task<List<AppointmentDto>> GetAll()
        {
            var result = await _AppointmentService.GetAll();
            return result.Select(x => x.ToAppointmentDto()).ToList();
        }

        [HttpGet("{AppointmentId}", Name = "GetAppointment")]
        public async Task<AppointmentDto?> Get(int AppointmentId)
        {
            var result = await _AppointmentService.GetById(AppointmentId);
            return result?.ToAppointmentDto();
        }

        [HttpPost, Route("")]
        public async Task<int> Create([FromBody] AppointmentDto requestDto)
        {
            var AppointmentModel = requestDto.ToAppointmentModel();
            return await _AppointmentService.CreateAppointment(AppointmentModel);
        }

        [HttpPut, Route("update")]
        public async Task<IActionResult> Update([FromBody] AppointmentDto requestDto)
        {
            await _AppointmentService.UpdateAppointment(requestDto.ToAppointmentModel());
            return Ok();
        }

        [HttpDelete, Route("{AppointmentId}")]
        public async Task<IActionResult> Delete(int AppointmentId)
        {
            await _AppointmentService.DeleteAppointment(AppointmentId);
            return Ok();
        }
    }
}
