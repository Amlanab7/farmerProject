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

        [HttpGet]

        [Route("GetAll")]

        public IEnumerable<crop> GetCrops()
        {
            return db.crops;

        }
        [HttpGet]
        [Route("get/{id}")]
        public IHttpActionResult GetCrop(int id)
        {
            crop newCrop = null;
            try
            {
                newCrop = db.crops.Find(id);
                if (newCrop == null)
                {
                    return NotFound();
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(newCrop);
        }
     
        [HttpPost]
        [Route("{id}")]
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
        [HttpGet]
        [Route("soldhistory/{id}")]
        public IHttpActionResult GetSoldHistory(int id)
        {
            IList<SoldHistory> soldItems = null;

            
            {
                soldItems = db.crops.Where(u=>u.UID==id && u.sold==1).Select(s => new SoldHistory()
                        {
                            date = (DateTime)s.date_sold,
                            Crop_name = s.crop_name,
                            Quantity = s.quantity,
                            Base_price= (int)s.base_price,
                            Sold_price= (double)s.sold_price
                        }).ToList<SoldHistory>();
            }

            if (soldItems.Count == 0)
            {
                return NotFound();
            }

            return Ok(soldItems);
        }
        [HttpGet]
        [Route("market/get/{id}")]
        public IHttpActionResult GetMarketCrops(int id)
        {
            IList<crop> newCrop = null;

            try
            {
                newCrop = db.crops.Where(c => c.approved == 1 && c.sold == null && c.UID == id).ToList<crop>();
                if (newCrop.Count() == 0)
                {
                    return NotFound();
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(newCrop);
        }
        [HttpGet]
        [Route("previous/get/{id}")]
        public IHttpActionResult GetPreviousBidss(int id, int UID)
        {
            IList<bid> prevBids = null;

            try
            {
                prevBids = db.bids.Where(c => c.approved == 1 && c.UID == UID && c.CID == id).ToList<bid>();
                if (prevBids.Count() == 0)
                {
                    return NotFound();
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(prevBids);
        }

       
        [HttpPost]
        [Route("bids/{id}")]
        public IHttpActionResult AddBid([FromBody] int[] biddata)
        {
            //,int bidamount, int UID
            bid newBid = new bid();
            int cid = biddata[0];
            var name = db.crops.Where(u => u.CID == cid).FirstOrDefault();
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                newBid.CID = cid;
                newBid.crop_name = name.crop_name;
                newBid.bid1 = biddata[1];
                newBid.UID = biddata[2];
                db.bids.Add(newBid);
                db.SaveChanges();

            }
            catch (Exception ex)
            {
                throw ex;

            }
            return Ok(newBid);
        }
        [HttpPut]
        [Route("bids/approval/{id}")]
        public IHttpActionResult ApprovalBid(int id)
        {

            var approval = db.bids.FirstOrDefault(x => x.BIID == id);

            var crop_current = db.crops.FirstOrDefault(u => u.CID == approval.CID);
            var bidder = db.users.FirstOrDefault(u => u.UID == crop_current.UID);
            if (approval != null)
            {
                approval.approved = 1;
                crop_current.current_bid = approval.bid1;
                crop_current.bidder_name = bidder.full_name;

                db.SaveChanges();
            }
            return Ok();
        }
        [HttpGet]
        [Route("cropforsale")]
        public IHttpActionResult BidderMarketplace()
        {
            IList<CropsforSale> saleItems = null;


            {
                saleItems = db.crops.Where(u => u.approved == 1 && u.sold == null).Select(s => new CropsforSale()
                {
                    CID = s.CID,
                    Crop_Type = s.crop_type,
                    Crop_name = s.crop_name,
                    Base_price = (int)s.base_price,
                    Current_bid = (double)s.current_bid
                }).ToList<CropsforSale>();
            }

            if (saleItems.Count == 0)
            {
                return NotFound();
            }

            return Ok(saleItems);
        }
    }
}

