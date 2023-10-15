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
    public class DoctorController : ControllerBase
    {

        private readonly IDoctorService _DoctorService;
        private readonly ILogger<DoctorController> _logger;

        public DoctorController(IDoctorService DoctorService, ILogger<DoctorController> logger)
        {
            _DoctorService = DoctorService;
            _logger = logger;
        }

        [HttpGet("", Name = "GetAllDoctors")]
        public async Task<List<DoctorDto>> GetAll()
        {
            var result = await _DoctorService.GetAll();
            return result.Select(x => x.ToDoctorDto()).ToList();
        }

        [HttpGet("{DoctorId}", Name = "GetDoctor")]
        public async Task<DoctorDto?> Get(int DoctorId)
        {
            var result = await _DoctorService.GetById(DoctorId);
            return result?.ToDoctorDto();
        }

        [HttpPost, Route("")]
        public async Task<int> Create([FromBody] DoctorDto requestDto)
        {
            var DoctorModel = requestDto.ToDoctorModel();
            return await _DoctorService.CreateDoctor(DoctorModel);
        }

        [HttpPut, Route("update")]
        public async Task<IActionResult> Update([FromBody] DoctorDto requestDto)
        {
            await _DoctorService.UpdateDoctor(requestDto.ToDoctorModel());
            return Ok();
        }

        [HttpDelete, Route("{DoctorId}")]
        public async Task<IActionResult> Delete(int DoctorId)
        {
            await _DoctorService.DeleteDoctor(DoctorId);
            return Ok();
        }
    }
}
