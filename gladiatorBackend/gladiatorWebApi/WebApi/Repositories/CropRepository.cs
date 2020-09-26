using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class CropRepository:ICropsRepository<crop>
    {
        public readonly gladiatorEntities dbcontext;
        public CropRepository(gladiatorEntities db)
        {
            dbcontext = db;
        }
        public void Add(crop newCrop)
        {
            dbcontext.crops.Add(newCrop);
            dbcontext.SaveChanges();
        }
    }
}