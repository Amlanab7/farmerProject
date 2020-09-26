using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApi.Repositories
{
    interface IUserRepo<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        
        void Add(TEntity entity);
    }
}
