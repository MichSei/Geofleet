import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MapComponent,
    VehicleListComponent,
    VehicleDetailsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {}