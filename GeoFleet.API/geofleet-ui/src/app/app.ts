import { Component } from '@angular/core';
import { MapComponent } from './map/map';
import { VehicleListComponent } from './vehicle-list/vehicle-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent, VehicleListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}