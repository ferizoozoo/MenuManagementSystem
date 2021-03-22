using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuManagementSystem.Data.Repositories
{
    public interface IRepository<TEntity> 
        where TEntity : class
    {
        Task<TEntity> GetById(int id);
        Task<IEnumerable<TEntity>> GetAll();
        Task Insert(TEntity entity);
    }
}
