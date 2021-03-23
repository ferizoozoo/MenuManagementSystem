using MenuManagementSystem.Data.Context;
using MenuManagementSystem.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuManagementSystem.Data.Repositories
{
    public class CookRepository : IRepository<Cook>
    {
        private readonly MenuContext _context;

        public CookRepository(MenuContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Cook>> GetAll()
        {
            return await _context.Set<Cook>().ToListAsync();
        }

        public async Task<Cook> GetById(int id)
        {
            return await _context.Set<Cook>().FirstOrDefaultAsync(cook => cook.CookId == id);
        }

        public async Task Insert(Cook cook)
        {
            _context.Set<Cook>().Add(cook);
            await _context.SaveChangesAsync();
        }
    }
}
