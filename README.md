# Geofleet
GeoFleet

Simple fullstack fleet tracking demo with Angular and .NET.

The app shows vehicles on a map (Leaflet / OpenStreetMap), lets you select them from a sidebar, and displays basic information like status, driver and speed. Vehicle positions are loaded from a .NET API and updated on the map.

Tech
Angular (TypeScript)
.NET Web API (C#)
Leaflet / OpenStreetMap
Run locally

Backend:

cd geofleet-api
dotnet run

Frontend:

cd geofleet-ui
npm install
ng serve
Notes

Built as a small project working with geospatial data.