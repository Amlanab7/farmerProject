
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.RequiredClasses
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