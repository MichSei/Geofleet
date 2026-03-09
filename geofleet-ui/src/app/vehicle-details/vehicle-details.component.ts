import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css'
})
export class VehicleDetailsComponent {

  vehicle;

  constructor(private vehicleService: VehicleService) {
    this.vehicle = this.vehicleService.selectedVehicle;
  }

}