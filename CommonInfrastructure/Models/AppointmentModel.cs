using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace CommonInfrastructure.Models
{
    public class AppointmentModel
    {
        public int AppointmentId { get; set; } // int
        public int UserId { get; set; } // int
        public string UserName { get; set; } // nvarchar(400)
        public string UserEmail { get; set; }
        public string UserPhone { get; set; } // nvarchar(400)
        public string Message { get; set; } // nvarchar(400)
        public DateTime Date_Time { get; set; } // nvarchar(400)
        public int DoctorId { get; set; } // nvarchar(400)
        public Boolean Status { get; set; } // nvarchar(400)

    }

}
