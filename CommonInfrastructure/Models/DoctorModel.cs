using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace CommonInfrastructure.Models
{
    public class DoctorModel
    {
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
