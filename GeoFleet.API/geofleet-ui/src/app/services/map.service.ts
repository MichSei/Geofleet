import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map!: L.Map;
  private markers: Map<number, L.Marker> = new Map();
  private selectedVehicleId: number | null = null;
  private selectedVehicleIcon!: L.Icon;
  private defaultVehicleIcon!: L.Icon;
  private trackingEnabled = true;

  setMap(map: L.Map) {
    this.map = map;
  }

  registerMarker(id: number, marker: L.Marker) {
    this.markers.set(id, marker);
  }

  zoomToVehicle(id: number) {
  const marker = this.markers.get(id);
  if (!marker) return;
  if (this.selectedVehicleId !== null) {

    const previousMarker = this.markers.get(this.selectedVehicleId);
    if (previousMarker) {
      previousMarker.setIcon(this.defaultVehicleIcon);
      previousMarker.setZIndexOffset(0);
    }

  }
  this.selectedVehicleId = id;
  marker.setIcon(this.selectedVehicleIcon);
  marker.setZIndexOffset(1000);
  const latlng = marker.getLatLng()
  ;
  this.map.flyTo(latlng, 16, { duration: 0.5 });

  marker.openPopup();
  }

  getSelectedVehicleId(): number | null {
    return this.selectedVehicleId;
  }

  setIcons(defaultIcon: L.Icon, selectedIcon: L.Icon) {
  this.defaultVehicleIcon = defaultIcon;
  this.selectedVehicleIcon = selectedIcon;
  }

  followVehicle(id: number) {

  if (!this.trackingEnabled) return;

  const marker = this.markers.get(id);
  if (!marker) return;

  const latlng = marker.getLatLng();

  this.map.panTo(latlng);

}

}