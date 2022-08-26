import React from "react";
import axios from "axios";
import { useContext } from "react";

import './Input.css';
import { updateUI } from '../../services/update-ui.js';
import { MapContext } from '../../services/map-context';

export function Input() {
    const { setLat, setLong } = useContext(MapContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        const ip = e.target.elements[0].value.trim();

        if (testIP(ip)) {
            try {
                const urlRequest = `/ip/${ip}`;
                
                const dataIP = await axios.get(urlRequest)
                                
                const lat = dataIP.data.location.lat;
                const long = dataIP.data.location.lng;

                const postalCode = `${dataIP.data.location.postalCode == "" 
                                    ? "Postal code not find" 
                                    : dataIP.data.location.postalCode }`

                const location = 
                    `${dataIP.data.location.city}, ${dataIP.data.location.region}`

                const timeZone = dataIP.data.location.timezone;
                const isp = dataIP.data.isp;

                console.log(lat, long)
                
                console.log(dataIP)

                setLat(lat);
                setLong(long);

                setTimeout(() => {
                    updateUI(ip, location, postalCode, timeZone, isp);
                }, 100);
            } catch (error) {
                console.error(error)
            }
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