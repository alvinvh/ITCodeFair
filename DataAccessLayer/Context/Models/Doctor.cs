using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Context.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; } // int
        public string DoctorName { get; set; } // nvarchar(400)
        public string Image_url { get; set; }
        public string Specialist { get; set; } // nvarchar(400)
        public string Qualification { get; set; } // nvarchar(400)
        public string Certification { get; set; } // nvarchar(400)
        public string Education { get; set; } // nvarchar(400)
        public string Description { get; set; } // nvarchar(400)
        public string Availability { get; set; } // nvarchar(400)
        
    }
}
