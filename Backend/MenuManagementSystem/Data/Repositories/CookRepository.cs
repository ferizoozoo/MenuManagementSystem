using MenuManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuManagementSystem.Data.Repositories
{
    public class CookRepository : IRepository<Cook>
    {
        public Task<IEnumerable<Cook>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Cook> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task Insert(Cook entity)
        {
            throw new NotImplementedException();
        }
    }
}
