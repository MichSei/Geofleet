using Microsoft.AspNetCore.Mvc;
using Geofleet.Api.Models;

namespace Geofleet.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VehiclesController : ControllerBase
{
    [HttpGet]
    public IEnumerable<Vehicle> GetVehicles()
    {
        return new List<Vehicle>
        {
            new Vehicle
            {
                Id = 1,
                Name = "Truck 1",
                Lat = 48.179,
                Lng = 11.255,
                Driver = "Max Mustermann",
                Status = "Active",
                Speed = 42
            },
            new Vehicle
            {
                Id = 2,
                Name = "Truck 2",
                Lat = 48.185,
                Lng = 11.265,
                Driver = "Anna Schmidt",
                Status = "Idle",
                Speed = 0
            },
            new Vehicle
            {
                Id = 3,
                Name = "Truck 3",
                Lat = 48.175,
                Lng = 11.245,
                Driver = "Lukas Bauer",
                Status = "Active",
                Speed = 38
            }
        };
    }
}