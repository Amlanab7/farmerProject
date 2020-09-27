using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;
using WebApi.RequiredClasses;

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
        public IHttpActionResult AddUser([FromBody] user RegistrationForm)
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
        [Route("login")]
        public IHttpActionResult VerifyLogin(LoginDetails Details)
        {
            
            user Userdata = null;

            try
            {
                var userFound = db.users
                .Where(u => u.email == Details.email && u.password == Details.password)
                                     .SingleOrDefault();

                if (userFound != null)
                {
                    Userdata = userFound;
                }
                else
                {
                    Userdata = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(Userdata);

        }
    }
}
