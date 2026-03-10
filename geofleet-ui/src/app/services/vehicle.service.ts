import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiUrl = 'http://localhost:5137/api/vehicles';

  selectedVehicle = signal<Vehicle | null>(null);

  constructor(private http: HttpClient) 
  {
  }

  setSelectedVehicle(vehicle: Vehicle) {
    this.selectedVehicle.set(vehicle);
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }
}