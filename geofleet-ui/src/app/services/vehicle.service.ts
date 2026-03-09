import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  selectedVehicle = signal<Vehicle | null>(null);

  constructor() {}

  setSelectedVehicle(vehicle: Vehicle) {
    this.selectedVehicle.set(vehicle);
  }

  getVehicles(): Vehicle[] {

  return [

    {
      id: 1,
      name: 'Truck 1',
      lat: 48.179,
      lng: 11.255,
      driver: 'Maxim Maler',
      status: 'Active',
      speed: 42
    },

    {
      id: 2,
      name: 'Truck 2',
      lat: 48.185,
      lng: 11.265,
      driver: 'Hans Heinrich',
      status: 'Idle',
      speed: 0
    },

    {
      id: 3,
      name: 'Truck 3',
      lat: 48.175,
      lng: 11.245,
      driver: 'Franz Klarbauer',
      status: 'Active',
      speed: 38
    }

  ];

}

}