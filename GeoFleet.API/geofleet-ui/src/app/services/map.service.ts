import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map!: L.Map;

  setMap(map: L.Map) {
    this.map = map;
  }

  zoomTo(lat: number, lng: number) {
    if (this.map) {
      this.map.setView([lat, lng], 15);
    }
  }

}