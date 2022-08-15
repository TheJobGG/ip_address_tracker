import React from "react";

import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import { MapContainer, SVGOverlay, ZoomControl, Marker } from "react-leaflet";

import './Map.css';
import { Pointer } from '../Pointer/Pointer';

export function Map() {

    /* const lat = 26.9377775;
    const long = -105.7014978; */

    const lat = 51.505;
    const long = -0.09;

    const position = [lat, long]

    const bounds = [
        [51.49, 51.4],
    ]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <SVGOverlay bounds={bounds}>
                <Pointer />
            </SVGOverlay> */}
            <Marker position={[51.505, -0.09]}>
            </Marker>
            <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" />
            <div>Lorem ipsum dolor sit amet.</div>
        </MapContainer>
    );
}