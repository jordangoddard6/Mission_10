using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission_10.Data;

namespace Mission_10.Controllers
{
    // Bowling API
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        // Get action for external programs to get Bowler data
        [HttpGet(Name = "GetBowlers")]
        public IEnumerable<Bowler> Get()
            {
                // Pull data from database and return in list
                IEnumerable<Bowler> bowlerList = _bowlingContext.Bowlers
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
