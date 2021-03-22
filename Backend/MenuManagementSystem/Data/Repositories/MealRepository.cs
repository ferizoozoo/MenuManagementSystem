using MenuManagementSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuManagementSystem.Data.Repositories
{
    public class MealRepository : IRepository<Meal>
    {
        public Task<IEnumerable<Meal>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Meal> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task Insert(Meal entity)
        {
            throw new NotImplementedException();
        }
    }
}
