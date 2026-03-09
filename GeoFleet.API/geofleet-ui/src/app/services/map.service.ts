import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map!: L.Map;
  private markers: Map<number, L.Marker> = new Map();

  setMap(map: L.Map) {
    this.map = map;
  }

  registerMarker(id: number, marker: L.Marker) {
    this.markers.set(id, marker);
  }

  zoomToVehicle(id: number) {

    const marker = this.markers.get(id);
    if (!marker) return;

    const latlng = marker.getLatLng();

    this.map.flyTo(latlng, 16, {
      duration: 0.5
    });

    marker.openPopup();

    marker.setZIndexOffset(1000);

  }

}