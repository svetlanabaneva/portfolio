import React from 'react'
import './map.css'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'

  delete L.Icon.Default.prototype._getIconUrl;
  
  L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });
const Map = () => {
  return (
    <>
    <MapContainer center={[50.62, 7.23]} zoom={13} className="map-wrap">
    <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[50.62, 7.23]}>
        <Popup>
            <di>I live somewhere around here :) </di>
        </Popup>
    </Marker>
    </MapContainer>
    </>
  )
}

export default Map
