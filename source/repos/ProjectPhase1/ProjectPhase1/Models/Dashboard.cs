using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectPhase1.Models
{
    public class Dashboard
    {
        public int dashboardID { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string anchortag { get; set; }
        public string imgtag { get; set; }
    }
}