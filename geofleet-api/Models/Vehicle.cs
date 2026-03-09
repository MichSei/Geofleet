namespace Geofleet.Api.Models;

public class Vehicle
{
    public int Id { get; set; }

    public string Name { get; set; } = "";

    public double Lat { get; set; }

    public double Lng { get; set; }

    public string Driver { get; set; } = "";

    public string Status { get; set; } = "";

    public int Speed { get; set; }
}