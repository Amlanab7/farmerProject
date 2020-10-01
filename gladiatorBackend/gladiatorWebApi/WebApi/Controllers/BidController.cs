using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    [RoutePrefix("api/bids")]
    public class BidController : ApiController
    {
        gladiatorEntities db = new gladiatorEntities();
        public IHttpActionResult AddBid([FromBody] bid newbid,int id)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var uid = db.crops.Where(u => u.CID == id).FirstOrDefault();
                

                db.bids.Add(newbid);
                newbid.UID = uid.UID;
                newbid.CID = id;

                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return Ok(newbid);
        }
        //[Route("approval/{id}")]
        //public IHttpActionResult Approval(int id)
        //{

        //    var approval = db.bids.FirstOrDefault(x => x.CID == id);
        //    var currentBid = db.crops.Where(u => u.CID == approval.CID).SingleOrDefault();
        //    var biddername = db.users.Where(u => u.UID == approval.UID).SingleOrDefault();
        //    if (approval != null)
        //    {
        //        approval.approved = 1;
        //        currentBid.current_bid = approval.bid1;
        //        currentBid.bidder_name = biddername.full_name;
                
        //        db.SaveChanges();
        //    }
        //    return Ok();
        //}
    }
}
