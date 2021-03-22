using MenuManagementSystem.Data.Context;
using MenuManagementSystem.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuManagementSystem.Data.Repositories
{
    public class MealRepository : IRepository<Meal>
    {
        private readonly MenuContext _context;

        public MealRepository(MenuContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Meal>> GetAll()
        {
            return await _context.Meals.ToListAsync();
        }

        public async Task<Meal> GetById(int id)
        {
            return await _context.Meals.FirstOrDefaultAsync(meal => meal.Id == id);
        }

        public async Task Insert(Meal meal)
        {
            _context.Meals.Add(meal);
            await _context.SaveChangesAsync();
        }
    }
}
