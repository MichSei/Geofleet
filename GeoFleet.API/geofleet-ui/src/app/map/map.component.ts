import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { VehicleService } from '../services/vehicle.service';
import { MapService } from '../services/map.service';
import { Vehicle } from '../models/vehicle';


@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {

  private markers: Map<number, L.Marker> = new Map();

  constructor(
    private vehicleService: VehicleService,
    private mapService: MapService
  ) {}

  ngAfterViewInit(): void {

    const map = L.map('map', {
      center: [48.179, 11.255],
      zoom: 13
    });

    this.mapService.setMap(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const truckIcon = L.icon({
  iconUrl: 'icons/truck.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
  });

    const vehicles: Vehicle[] = this.vehicleService.getVehicles();

  vehicles.forEach(vehicle => {

  const marker = L.marker(
    [vehicle.lat, vehicle.lng],
    { icon: truckIcon }
  )
  .addTo(map)
  .bindPopup(vehicle.name);

  this.mapService.registerMarker(vehicle.id, marker);

  this.markers.set(vehicle.id, marker);   // ← FEHLT bei dir

  });

    setInterval(() => {
  const vehicles = this.vehicleService.getVehicles();
  vehicles.forEach(vehicle => {
    const marker = this.markers.get(vehicle.id);
    if (!marker) return;
    // Random movement for testing purposes
    const newLat = vehicle.lat + (Math.random() - 0.5) * 0.002;
    const newLng = vehicle.lng + (Math.random() - 0.5) * 0.002;
    marker.setLatLng([newLat, newLng]);
  });
  }, 30000);

    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }
}