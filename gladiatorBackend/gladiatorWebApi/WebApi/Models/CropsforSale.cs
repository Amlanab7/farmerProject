using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class CropsforSale
    {
        public int CID { get; set; }
        public string Crop_Type { get; set; }
        public string Crop_name { get; set; }
        public int Base_price { get; set; }
        public double Current_bid { get; set; }
    }
}