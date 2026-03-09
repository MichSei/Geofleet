import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { VehicleService } from '../services/vehicle';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vehicle-list.html',
  styleUrl: './vehicle-list.css'
})
export class VehicleListComponent {

  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) {
    this.vehicles = this.vehicleService.getVehicles();
  }

}