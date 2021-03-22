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
            return await _context.Cooks.ToListAsync();
        }

        public async Task<Cook> GetById(int id)
        {
            return await _context.Cooks.FirstOrDefaultAsync(cook => cook.Id == id);
        }

        public async Task Insert(Cook cook)
        {
            _context.Cooks.Add(cook);
            await _context.SaveChangesAsync();
        }
    }
}
