import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {TbTruckDelivery} from 'react-icons/tb'
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";

import '../styles/components/Map.css';

const Map = ({positionLatLong, buyer}) => {

    

    const position = [positionLatLong.lat, positionLatLong.lng]

    const iconMarkup = renderToStaticMarkup(
        <TbTruckDelivery size={40} className="Map-icon"/>
    );

  const customMarkerIcon = divIcon({
    html: iconMarkup
  });
    
    return (
        <MapContainer center={position} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customMarkerIcon}>
                <Popup >
                    {buyer[0].address} {buyer[0].apto} <br /> {buyer[0].city} <br/> {buyer[0].country}
                </Popup>
            </Marker>
        </MapContainer>

    );
};
export default Map;