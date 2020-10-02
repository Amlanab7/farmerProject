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

            
            
                soldItems = db.crops.Where(u=>u.UID==id && u.sold==1).Select(s => new SoldHistory()
                        {
                            date = (DateTime)s.date_sold,
                            Crop_name = s.crop_name,
                            Quantity = s.quantity,
                            Base_price= (int)s.base_price,
                            Sold_price= (double)s.sold_price
                        }).ToList<SoldHistory>();
            

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
            IList<PreviousBids> prevBids = null;

            try
            {
                prevBids = db.bids.Where(c => c.approved == 1 && c.UID == UID && c.CID == id)
                                  .Select(s => new PreviousBids
                                  {
                                      bid1 = s.bid1
                                  }).ToList<PreviousBids>() ;
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
        [HttpGet]
        [Route("allbids")]
        public IHttpActionResult GetBids()
        {
            IList<AllBids> allbids = null;


            
                allbids = (IList<AllBids>)(from c in db.crops
                            join b in db.bids on c.CID equals b.CID
                                           where b.approved==null               
                            select new AllBids()
                            {
                                BIID=b.BIID,
                                crop_name=c.crop_name,
                                crop_type=c.crop_type,
                                base_price= (int)c.base_price,
                                current_bid= (double)c.current_bid,
                                bid1=b.bid1
                            }).ToList<AllBids>();
            

            if (allbids.Count == 0)
            {
                return NotFound();
            }

            return Ok(allbids);
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
        [HttpPut]
        [Route("bids/rejection/{id}")]
        public IHttpActionResult RejectionBid(int id)
        {

            var approval = db.bids.FirstOrDefault(x => x.BIID == id);

            //var crop_current = db.crops.FirstOrDefault(u => u.CID == approval.CID);
            //var bidder = db.users.FirstOrDefault(u => u.UID == crop_current.UID);
            if (approval != null)
            {
                approval.approved = 1;
                //crop_current.current_bid = approval.bid1;
                //crop_current.bidder_name = bidder.full_name;

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
        [HttpGet]
        [Route("adminmarket")]
        public IHttpActionResult AdminMarketplace()
        {
            IList<AdminMarket> itemsforSale = null;


            {
                itemsforSale = db.crops.Where(u => u.approved == 1 && u.sold == null && u.current_bid != null).Select(s => new AdminMarket()
                {
                    CID = s.CID,
                      crop_type = s.crop_type,
                    crop_name = s.crop_name,
                    base_price = (int)s.base_price,
                    current_bid = (double)s.current_bid,
                    bidder_name = s.bidder_name
                }).ToList<AdminMarket>();
            }

            if (itemsforSale.Count == 0)
            {
                return NotFound();
            }

            return Ok(itemsforSale);
        }
    }
}

