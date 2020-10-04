using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class AllBids
    {
        public int BIID { get; set; }
        public string crop_type { get; set; }
        public string crop_name { get; set; }
        public int base_price { get; set; }
        public double? current_bid { get; set; }
        public double? bid1 { get; set; }
    }
}