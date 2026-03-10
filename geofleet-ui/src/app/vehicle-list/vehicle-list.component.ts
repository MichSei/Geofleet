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
  
  vehicles: Vehicle[] = [];
  selectedVehicleId: number | null = null;

  constructor(
    private vehicleService: VehicleService,
    private mapService: MapService
  ) {
    this.vehicleService.getVehicles().subscribe(data => {
  this.vehicles = data;
});
  }

  selectVehicle(vehicle: Vehicle) {

    this.selectedVehicleId = vehicle.id;

    this.vehicleService.setSelectedVehicle(vehicle);

    this.mapService.zoomToVehicle(vehicle.id);

  }

}