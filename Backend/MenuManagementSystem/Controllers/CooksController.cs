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
    public class CooksController : ControllerBase
    {
        private readonly IRepository<Cook> _repository;

        public CooksController(IRepository<Cook> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Cook>> Get()
        {
            return await _repository.GetAll();
        }

        [HttpGet("{:id}")]
        public async Task<Cook> GetById([FromRoute] int id)
        {
            return await _repository.GetById(id);
        }

        [HttpPost]
        public async Task Post([FromBody] Cook cook)
        {
            if (ModelState.IsValid)
                await _repository.Insert(cook);
        }
    }
}
