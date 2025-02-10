using Microsoft.AspNetCore.Mvc;

namespace AlgoPathfinderProject.Server.Controllers
{

    [ApiController]
    [Route("api/pathfinding")]
    public class PathfindingController : ControllerBase
    {
        [HttpPost("find-path")]
        public IActionResult FindPath([FromBody] GridRequest request)
        {
            // 🔹 Placeholder: Call pathfinding algorithm here
            var result = new { Path = new[] { (0, 0), (1, 1), (2, 2) }, Cost = 10 };
            return Ok(result);
        }
    }

    // 🔹 Define GridRequest Model
    public class GridRequest
    {
        public int[][] Grid { get; set; }  // 2D grid representation
        public (int, int) Start { get; set; }
        public (int, int) End { get; set; }
    }

}
