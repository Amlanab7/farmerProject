//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class bid
    {
        public int CID { get; set; }
        public string crop_name { get; set; }
        public double bid1 { get; set; }
        public int UID { get; set; }
    
        public virtual crop crop { get; set; }
        public virtual user user { get; set; }
    }
}