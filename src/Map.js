import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./Map.css";

function Map({ countries, casesType, center, zoom }) {
  function ChangeView({ center, zoom }) {

    console.log('zoom from map.js', zoom)

    const map = useMap();
    map.setView(center, zoom);
    return null;
  }


  return (
    <MapContainer
      casesType={casesType}
      className="map"
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;