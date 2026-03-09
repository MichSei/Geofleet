import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { VehicleService } from '../services/vehicle.service';
import { MapService } from '../services/map.service';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent {

  vehicles: Vehicle[];

  constructor(
    private vehicleService: VehicleService,
    private mapService: MapService
  ) {
    this.vehicles = this.vehicleService.getVehicles();
  }

  zoomToVehicle(vehicle: Vehicle) {
  this.mapService.zoomTo(vehicle.lat, vehicle.lng);
}
}