import React from "react";
import { useState, createContext } from "react";

import { useMapEvent } from "react-leaflet";

const MapContext = createContext();

function MapProvider(props) {
    const [lat, setLat] = useState(39.04372);
    const [long, setLong] = useState(-77.48749);

    function UpdateMap() {
        const map = useMapEvent('click', () => map.flyTo([lat, long]));
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