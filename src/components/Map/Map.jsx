import React from "react";
import { useContext } from 'react';

import { TileLayer } from 'react-leaflet/TileLayer';
import { MapContainer, ZoomControl, Marker } from "react-leaflet";

import './Map.css';
import { Pointer } from '../Pointer/Pointer';
import { MapContext } from '../../services/map-context';

export function Map() {
    const { lat, long, UpdateMap } = useContext(MapContext);
    const position = [lat, long];

    return (
        <MapContainer id="map-container" center={position} zoom={5} scrollWheelZoom={false} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />
            <Marker position={position}>
            </Marker>
            <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" />
            <UpdateMap/>
        </MapContainer>
    );
}