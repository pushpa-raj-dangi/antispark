using ArtiSpark.API.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ArtsController : BaseApiController
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("HEllo");
        }

        [HttpGet("{id}")]
        public IActionResult GetSingle(int id)
        {
            return Ok(id);
        }

        [HttpDelete("{userId}")]
        public IActionResult Delete(int id)
        {
            return Ok(id);
        }

        [HttpPut("{id}")]
        public IActionResult Edit(int id)
        {
            return Ok(id);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Art art)
        {
            return Ok(art);
        }
    }
}