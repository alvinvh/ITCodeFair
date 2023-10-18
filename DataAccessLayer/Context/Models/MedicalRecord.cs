using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Context.Models
{
    public class MedicalRecord
    {
        [Key]
        public int MedicalRecordId { get; set; } // int
        public int UserId { get; set; } // int
        public DateTime Date_Time { get; set; } 
        public string Topic { get; set; }
        public string Description { get; set; } // nvarchar(400)
        public int DoctorId { get; set; } // nvarchar(400)
        
        
    }
}

