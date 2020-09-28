using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    [RoutePrefix("api/crops")]
    public class CropController : ApiController
    {
        gladiatorEntities db = new gladiatorEntities();

        [HttpPost]
        [Route("")]
        public IHttpActionResult AddCrop([FromBody] crop newCrop,int id)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                newCrop.UID = id;
                db.crops.Add(newCrop);
                db.SaveChanges();
                
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return Ok(newCrop);
        }
        [HttpPut]
        [Route("approval/{id}")]
        public IHttpActionResult Approval(int id)
        {

            var approval = db.crops.FirstOrDefault(x => x.CID == id);

            if (approval != null)
            {
                approval.approved = 1;
                db.SaveChanges();
            }
            return Ok();
        }
        [HttpPut]
        [Route("rejection/{id}")]
        public IHttpActionResult Reject(int id)
        {

            var approval = db.crops.FirstOrDefault(x => x.CID == id);

            if (approval != null)
            {
                approval.approved = -1;
                db.SaveChanges();
            }
            return Ok();
        }
        [HttpPut]
        [Route("sold/{id}")]
        public IHttpActionResult Sold(int id)
        {

            var sold = db.crops.FirstOrDefault(x => x.CID == id);

            if (sold != null)
            {
                sold.sold = 1;
                sold.date_sold = DateTime.Now;
                db.SaveChanges();
            }
            return Ok();
        }
    }
}

