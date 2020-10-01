using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class SoldHistory
    {
        public System.DateTime date { get; set; }
        public string Crop_name { get; set; }
        public int Quantity { get; set; }
        public int Base_price { get; set; }
        public double Sold_price { get; set; }
    }
}