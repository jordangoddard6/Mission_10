using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission_10.Data;

namespace Mission_10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {

        [HttpGet(Name = "GetBowlers")]
        public IEnumerable<Bowler> Get()
            {
                var bowlerList = _bowlingContext.Bowlers
                .Include(b => b.Team)
                .Where(x => x.Team.TeamName == "Marlins" || x.Team.TeamName == "Sharks")
                .ToList();

                return bowlerList;
            }

        private BowlingLeagueContext _bowlingContext;

        public BowlingController(BowlingLeagueContext temp)
        {
            _bowlingContext = temp;
        }
    }
}
