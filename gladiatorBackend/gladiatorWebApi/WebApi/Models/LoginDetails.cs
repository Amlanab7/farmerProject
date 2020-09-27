using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class LoginDetails:user
    {
        public LoginDetails(string email, string password)
        {
            this.email = email;
            this.password = password;
        }
    }
}