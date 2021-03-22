using MenuManagementSystem.Data.Repositories;
using MenuManagementSystem.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuManagementSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MealsController : ControllerBase
    {
        private readonly IRepository<Meal> _repository;

        public MealsController(IRepository<Meal> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Meal>> Get()
        {
            return await _repository.GetAll();
        }

        [HttpGet("{:id}")]
        public async Task<Meal> GetById([FromRoute] int id)
        {
            return await _repository.GetById(id);
        }

        [HttpPost]
        public async Task Post([FromBody] Meal meal)
        {
            if (ModelState.IsValid)
                await _repository.Insert(meal);
        }
    }
}
