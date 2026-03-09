import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() {}

  getVehicles(): Vehicle[] {
    return [
      { id: 1, name: 'Truck 1', lat: 48.179, lng: 11.255 },
      { id: 2, name: 'Truck 2', lat: 48.185, lng: 11.265 },
      { id: 3, name: 'Truck 3', lat: 48.175, lng: 11.245 }
    ];
  }

}