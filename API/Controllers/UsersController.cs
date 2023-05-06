using ArtiSpark.API.Controllers;
using ArtiSpark.API.Dtos;
using AutoMapper;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;

        public UsersController(UserManager<AppUser> userManager, IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Users()
        {
            var users = _userManager.Users.ToList();

            // return Ok(_mapper.Map<IEnumerable<UserDto>>(users));
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(string id)
        {
            return Ok(_userManager.Users.FirstOrDefault(x => x.Id == id));
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            return Ok(_userManager.Users.FirstOrDefault(x => x.Id == id));
        }
        [HttpPut("{id}")]
        public IActionResult Edit(string id)
        {
            return Ok(_userManager.Users.FirstOrDefault(x => x.Id == id));
        }
        [HttpPost]
        public IActionResult Create([FromBody] AppUser user)
        {
            return Ok("don");
        }
    }
}