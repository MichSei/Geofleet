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

  const selectedTruckIcon = L.icon({
    iconUrl: 'icons/truck-selected.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });
  const activeIcon = L.icon({
  iconUrl: 'icons/truck-active.svg',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
  });

  const idleIcon = L.icon({
    iconUrl: 'icons/truck-idle.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const offlineIcon = L.icon({
    iconUrl: 'icons/truck-offline.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  this.mapService.setIcons(truckIcon, selectedTruckIcon);


    this.vehicleService.getVehicles().subscribe(vehicles => {

  vehicles.forEach(vehicle => {

    let icon = activeIcon;

    if (vehicle.status === 'Idle') {
      icon = idleIcon;
    }

    if (vehicle.status === 'Offline') {
      icon = offlineIcon;
    }

    const marker = L.marker(
      [vehicle.lat, vehicle.lng],
      { icon: icon }
    )
    .addTo(map)
    .bindPopup(`
      <b>${vehicle.name}</b><br>
      Driver: ${vehicle.driver}<br>
      Status: ${vehicle.status}<br>
      Speed: ${vehicle.speed} km/h
    `);

    this.mapService.registerMarker(vehicle.id, marker);

  this.markers.set(vehicle.id, marker); 

  });

   setInterval(() => {

  this.markers.forEach((marker, id) => {
    const pos = marker.getLatLng();
    const newLat = pos.lat + (Math.random() - 0.5) * 0.002;
    const newLng = pos.lng + (Math.random() - 0.5) * 0.002;
    marker.setLatLng([newLat, newLng]);
   const selectedId = this.mapService.getSelectedVehicleId();

    if (selectedId === id) {
      this.mapService.followVehicle(id);
    }
  });
  }, 10000);

    setTimeout(() => {
      map.invalidateSize();
   }, 0);
    }); 

  }

} 