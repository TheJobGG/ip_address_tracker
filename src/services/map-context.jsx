import React from "react";
import { useState, createContext } from "react";

import { useMapEvent } from "react-leaflet";

const MapContext = createContext();

function MapProvider(props) {
    const [lat, setLat] = useState(34.04915);
    const [long, setLong] = useState(-118.09462);

    function UpdateMap() {
        const map = useMapEvent('click', () => map.flyTo([lat, long]));
        console.log('Método ejecutado');
    }

    return (
        <>
            <MapContext.Provider
                value={{
                    lat,
                    setLat,
                    long,
                    setLong,
                    UpdateMap,
                }}
            >
                {props.children}
            </MapContext.Provider>
        </>
    );
}

export { MapContext, MapProvider }