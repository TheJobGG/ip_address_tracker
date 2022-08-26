import React from "react";

import './Information.css'

export function Information(){
    return(
        <div id="information">
            <div className="data ip">
                <p>Ip address</p>
                <p>66.10.4.1</p>
            </div>
            <div className="data location">
                <p>Location</p>
                <p>Ashburn, Virginia</p>
                <p>20146</p>
            </div>
            <div className="data timezone">
                <p>Timezone</p>
                <p>UTC - 04:00</p>
            </div>
            <div className="data isp">
                <p>ISP</p>
                <p>AT&T Services, Inc.</p>
            </div>
        </div>
    );
}