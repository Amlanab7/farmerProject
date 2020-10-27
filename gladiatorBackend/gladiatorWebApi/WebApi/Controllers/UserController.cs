using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;
using System.Text;

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
            var unapproved = db.users.Where(u => u.approved == null);
            return unapproved;

        }
        [HttpGet]
        [Route("get/{id}")]
        public IHttpActionResult GetUser(int id)
        {
            user userdetail = null;
            try
            {
                userdetail = db.users.Find(id);
                if (userdetail == null)
                {
                    return NotFound();
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(userdetail);
        }
        [HttpGet]
        [Route("pan/{id}")]
        public IHttpActionResult GetPan(int id)
        {
            image img = null;


            try
            {
                img = db.images.Where(i => i.UID == id && i.imgCaption == "PAN").SingleOrDefault();
                if (img == null)
                {
                    return NotFound();
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(img);
        }
        [HttpGet]
        [Route("Aadhar/{id}")]
        public IHttpActionResult GetAadhar(int id)
        {
            var img = db.images.Where(i => i.UID == id && i.imgCaption == "Aadhar");

            try
            {

                if (img == null)
                {
                    return NotFound();
                }
            }

            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(img);
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
            var user = db.users.Where(x => x.UID == type.UID).FirstOrDefault();
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
                var userFound = db.users.Where(u => u.email == Details.email && u.password == Details.password && u.type == "Admin" && u.approved == 2).SingleOrDefault();

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
                var userFound = db.users.Where(u => u.email == Details.email && u.password == Details.password && u.type == "Farmer" && u.approved == 1).SingleOrDefault();

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
                var userFound = db.users.Where(u => u.email == Details.email && u.password == Details.password && u.type == "Bidder" && u.approved == 1).SingleOrDefault();

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

        [HttpPost]
        [AllowAnonymous]
        [Route("forgot")]
        public IHttpActionResult ForgotPassword([FromBody] Forgot email)
        {


            user u = db.users.Single(x => x.email == email.email);


            if (u != null)
            {

                MailMessage mailMessage = new MailMessage();


                StringBuilder sbEmailBody = new StringBuilder();
                sbEmailBody.Append("Dear " + u.full_name + ",<br/><br/>");
                sbEmailBody.Append("Your Password is " + u.password + ",<br/><br/>");

                sbEmailBody.Append("<br/><br/>");
                sbEmailBody.Append("<b>Farmers Team</b>");

                mailMessage.IsBodyHtml = true;

                mailMessage.Body = sbEmailBody.ToString();
                mailMessage.Subject = "Reset Your Password";
                SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);

                smtpClient.Credentials = new System.Net.NetworkCredential()
                {
                    UserName = "ltiteam4@gmail.com",
                    Password = "farmersapp1"
                };
                string to = u.email;
                string from = "ltiteam4@gmail.com";

                smtpClient.EnableSsl = true;

                mailMessage.From = new MailAddress(from);
                mailMessage.To.Add(to);
                smtpClient.Send(mailMessage);
                smtpClient.UseDefaultCredentials = false;

                return Ok();


            }
            else
            {

                return NotFound();
            }

        }

        [HttpPost]
        [Route("contact")]
        public IHttpActionResult AddContactQuery([FromBody] contactU newcontact)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                db.contactUs.Add(newcontact);

                db.SaveChanges();

            }
            catch (Exception ex)
            {
                throw ex;

            }
            return Ok(newcontact);

        }
    }

}