import React from "react";

import './Input.css';

export function Input() {
    return (
        <>
            <h1>IP Address Tracker</h1>
            <form id="form-search">
                <input type="text" name="search" id="search" autoComplete="off" maxLength={15} minLength={7} placeholder='Search for any IP address or domain'/>
                <button type="submit" id="btn-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth={3} d="M2 1l6 6-6 6" /></svg>
                </button>
            </form>
        </>
    );
}

/* 
    IP REGEX:
        \b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b
 */