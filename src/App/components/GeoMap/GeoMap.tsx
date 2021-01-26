import "leaflet/dist/leaflet.css";

import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import mapPin from "./pin.svg";

const mapPinIcon = Leaflet.icon({
  iconUrl: mapPin,
  iconSize: [48, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

interface GeoProps extends React.HTMLAttributes<HTMLDivElement> {
  lat: number,
  lng: number,
  width?: string | number,
  height?: string | number
}

const GeoMap = ({
  lat,
  lng,
  width='100vw',
  height='100vh',
  ...props
}: GeoProps)  => {
  return (
    <div style={{width:width, height:height}} {...props}>
      <MapContainer
        center={{lat, lng}}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
        />
        <Marker
          icon={mapPinIcon}
          position={[lat, lng]}
        ></Marker>
      </MapContainer>
    </div>
  );
}

export default GeoMap;
