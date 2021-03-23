using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuManagementSystem.Models
{
    public class Meal
    {
        public int MealId { get; set; }
        public string Name { get; set; }
        public DateTime MealTime { get; set; }

        public Cook Cook { get; set; }
    }
}
