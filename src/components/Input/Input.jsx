import React from "react";
import { useContext } from "react";

import './Input.css';
import { callAPI } from '../../services/ip-geolocation.js';
import { updateUI } from '../../services/update-ui.js';
import { MapContext } from '../../services/map-context';
import { fetchData } from "../../services/ip-geolocation.js";

export function Input() {

    const { lat, setLat, long, setLong, UpdateMap } = useContext(MapContext);

    const onSubmit = async(e) => {
        e.preventDefault();
        const ip = e.target.elements[0].value.trim();

        if (testIP(ip)) {
            const result = callAPI(ip);
            
            try {
                const result = await fetchData(API, ip);
                console.log(result);
            } catch (error) {
                console.error(error)
            }

            setLat(result.location.lat);
            setLong(result.location.lng);
            setTimeout(() => {
                updateUI(result);
            }, 100);
        } else {
            return alert('Formato de IP no válido');
        }
    };

    return (
        <>
            <h1>IP Address Tracker</h1>
            <form id="form-search" onSubmit={onSubmit}>

                <input
                    type="text"
                    /* pattern="(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))$" */
                    placeholder='Search for any IP address or domain'
                    name="search"
                    id="search"
                    autoComplete="off"
                    minLength={7}
                    maxLength={15}
                />

                <button type="submit" id="btn-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth={3} d="M2 1l6 6-6 6" /></svg>
                </button>
            </form>

            <script defer src="./src/services/form-manage.js"></script>
        </>
    );
}

function testIP(ip) {
    const regexp = /(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))$/;

    if (regexp.test(ip)) {
        return true;
    } else {
        return false;
    }

}