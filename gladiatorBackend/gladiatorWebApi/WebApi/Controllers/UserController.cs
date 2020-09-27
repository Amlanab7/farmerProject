using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;


namespace WebApi.Controllers
{
    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        
        gladiatorEntities db = new gladiatorEntities();
       

        [HttpGet]
        [Route("GetAll")]

        public IEnumerable<user> GetUsers()
        {
            return db.users;
            
        }

        [HttpPost]
        [Route("")]
        public IHttpActionResult AddUser([FromBody] user userObj)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                db.users.Add(userObj);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return Ok(userObj);
        }
        [HttpPut]
        [Route("approval/{id}")]
        public IHttpActionResult Approval(int id)
        {
            
            var approval = db.users.FirstOrDefault(x => x.UID == id);

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
            
            var approval = db.users.FirstOrDefault(x => x.UID == id);

            if (approval != null)
            {
                approval.approved = -1;
                db.SaveChanges();
            }
            return Ok();
        }
        }
}
