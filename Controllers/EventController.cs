using Microsoft.AspNetCore.Mvc;
using ProjetoAplicado.DAO;

namespace ProjetoAplicado.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
        public EventController()
        {
        }

        [HttpGet]
        public List<Event> Get()
        {
            EventDAO dao = new();
            List<Event> result = dao.Read();
            return result;
        }

        [HttpPost]
        [Route("post")]
        public void Post([FromBody] Event model)
        {
            EventDAO dao = new();
            dao.Insert(model);
        }

        [HttpPost]
        [Route("Remove")]
        public void Delete([FromBody] EventDelete name)
        {
            EventDAO dao = new();
            dao.Remove(name);
        }
    }
}
