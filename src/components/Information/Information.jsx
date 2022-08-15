import React from "react";

import './Information.css'

export function Information(){
    return(
        <div id="information">
            <div className="data ip">
                <p>Ip address</p>
                <p>192.212.174.101</p>
            </div>
            <div className="data location">
                <p>Location</p>
                <p>Brooklyn, NY 10001</p>
            </div>
            <div className="data timezone">
                <p>Timezone</p>
                <p>UTC - 05:00</p>
            </div>
            <div className="data isp">
                <p>ISP</p>
                <p>SpaceX Starlink</p>
            </div>
        </div>
    );
}