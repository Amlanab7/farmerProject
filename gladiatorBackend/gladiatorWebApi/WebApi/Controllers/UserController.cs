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
        [Route("create")]
        public IHttpActionResult AddUser(user RegistrationForm)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                db.users.Add(RegistrationForm);
                
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return Ok(RegistrationForm);
        }
        
        [HttpPut]
        [Route("type/{id}")]
        public IHttpActionResult TypeInputFarmer(UserType type)
        {
            var user= db.users.Where(x => x.UID == type.UID).FirstOrDefault();
            if (user != null) 
            {
                user.type = type.type;
                db.SaveChanges();
            }
         
            return Ok(user);

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

        [HttpPost]
        [Route("login/admin")]
        public IHttpActionResult VerifyLoginAdmin(LoginDetails Details)
        {

            user Userdata = null;

            try
            {
                var userFound = db.users.Where(u => u.email == Details.email && u.password == Details.password && u.type == "admin").SingleOrDefault();

                if (userFound != null)
                {
                    Userdata = userFound;
                }
                else
                {
                    Userdata = null;
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(Userdata);

        }
        [HttpPost]
        [Route("login/farmer")]
        public IHttpActionResult VerifyLoginFarmer(LoginDetails Details)
        {

            user Userdata = null;

            try
            {
                var userFound = db.users.Where(u => u.email == Details.email && u.password == Details.password && u.type == "farmer").SingleOrDefault();

                if (userFound != null)
                {
                    Userdata = userFound;
                }
                else
                {
                    Userdata = null;
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(Userdata);

        }
        [HttpPost]
        [Route("login/bidder")]
        public IHttpActionResult VerifyLoginBidder(LoginDetails Details)
        {

            user Userdata = null;

            try
            {
                var userFound = db.users.Where(u => u.email == Details.email && u.password == Details.password && u.type == "bidder").SingleOrDefault();

                if (userFound != null)
                {
                    Userdata = userFound;
                    return Ok(Userdata);
                }
                else
                {
                    Userdata = null;
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            

        }
    }
}
