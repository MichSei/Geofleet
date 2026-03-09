import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { VehicleService } from '../services/vehicle';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class MapComponent implements AfterViewInit {

  constructor(private vehicleService: VehicleService) {}

  ngAfterViewInit(): void {

    const map = L.map('map', {
      center: [48.179, 11.255],
      zoom: 13
    });

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
      L.marker([vehicle.lat, vehicle.lng], { icon: truckIcon })
        .addTo(map)
        .bindPopup(vehicle.name);
    });

    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }
}