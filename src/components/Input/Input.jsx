// Input-jsx

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
            const options = {
                'mode': 'no-cors',
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                }
            };

            try {
                const urlRequest = `http://localhost:3000/ip/${ip}`;
                /* const dataIP = await fetch(urlRequest, options) */
                const dataIP = await axios.get(urlRequest)
                    .then(response => console.log(response))
                    .then(response => response.json(), options);
                
                console.log("URL del fetch: ", urlRequest);
                console.log("Resultado de fetch: ", dataIP);

                /* setLat(result.location.lat);
                setLong(result.location.lng);

                setTimeout(() => {
                    updateUI(result);
                }, 100); */
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