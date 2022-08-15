import React from "react";

import './Background.css';
import pattern from '../../assets/pattern-bg.png';
import mapImage from '../../assets/map.webp';

export function Background() {
    return (
        <div id="bg-container">
            <img id="pattern-bg" src={pattern} alt="Pattern background" />
            <div id="map">
                <img id="map-image" src={mapImage} alt="Map image" />
                
            </div>
        </div>
    );
}