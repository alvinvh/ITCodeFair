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
    public class MedicalRecordController : ControllerBase
    {

        private readonly IMedicalRecordService _MedicalRecordService;
        private readonly ILogger<MedicalRecordController> _logger;

        public MedicalRecordController(IMedicalRecordService MedicalRecordService, ILogger<MedicalRecordController> logger)
        {
            _MedicalRecordService = MedicalRecordService;
            _logger = logger;
        }

        [HttpGet("", Name = "GetAllMedicalRecords")]
        public async Task<List<MedicalRecordDto>> GetAll()
        {
            var result = await _MedicalRecordService.GetAll();
            return result.Select(x => x.ToMedicalRecordDto()).ToList();
        }

        [HttpGet("{MedicalRecordId}", Name = "GetMedicalRecord")]
        public async Task<MedicalRecordDto?> Get(int MedicalRecordId)
        {
            var result = await _MedicalRecordService.GetById(MedicalRecordId);
            return result?.ToMedicalRecordDto();
        }

        [HttpPost, Route("")]
        public async Task<int> Create([FromBody] MedicalRecordDto requestDto)
        {
            var MedicalRecordModel = requestDto.ToMedicalRecordModel();
            return await _MedicalRecordService.CreateMedicalRecord(MedicalRecordModel);
        }

        [HttpPut, Route("update")]
        public async Task<IActionResult> Update([FromBody] MedicalRecordDto requestDto)
        {
            await _MedicalRecordService.UpdateMedicalRecord(requestDto.ToMedicalRecordModel());
            return Ok();
        }

        [HttpDelete, Route("{MedicalRecordId}")]
        public async Task<IActionResult> Delete(int MedicalRecordId)
        {
            await _MedicalRecordService.DeleteMedicalRecord(MedicalRecordId);
            return Ok();
        }
    }
}
