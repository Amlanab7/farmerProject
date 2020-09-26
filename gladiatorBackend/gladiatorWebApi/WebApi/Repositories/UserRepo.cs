using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class UserRepo:IUserRepo<user>
    {
        public readonly gladiatorEntities dbContext;
        public UserRepo(gladiatorEntities db)
        {
            dbContext = db;
        }
        public IEnumerable<user> GetAll()
        {
            return dbContext.users.ToList();
        }
        public void Add(user newUser)
        {
            dbContext.users.Add(newUser);
            dbContext.SaveChanges();
        }
    }
}