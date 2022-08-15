import React from "react";

import './Background.css';
import pattern from '../../assets/pattern-bg.png';
import { Map } from "../Map/Map"; 

export function Background() {
    return (
        <div id="bg-container">
            <img id="pattern-bg" src={pattern} alt="Pattern background" />

            <Map/>
        </div>
    );
}