using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;
using WebApi.Repositories;

namespace WebApi.Controllers
{
    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        readonly IUserRepo<user> dataRepo;
        public UserController()
        {
            this.dataRepo = new UserRepo(new gladiatorEntities());
        }

        [HttpGet]
        [Route("GetAll")]

        public IEnumerable<user> GetUsers()
        {
            return dataRepo.GetAll();
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
                dataRepo.Add(userObj);
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return Ok(userObj);
        }
    }
}
