export function updateUI(ip, location, postalCode, timeZone, isp) {
    const elementIp = document.querySelector('#information > .data.ip > p:last-child')
    const elementLocation = document.querySelector('#information > .data.location > p:nth-child(2)')
    const elementPostalCode = document.querySelector('#information > .data.location > p:last-child')
    const elementTimeZone = document.querySelector('#information > .data.timezone > p:last-child')
    const elementIsp = document.querySelector('#information > .data.isp > p:last-child')

    const locationContent = `<>`;

    elementIp.textContent = ip;
    elementLocation.textContent = location;
    elementPostalCode.textContent = postalCode;
    elementTimeZone.textContent = `UTC ${timeZone}`;
    elementIsp.textContent = isp;

    /* Click on the element to fly to location */
    document.elementFromPoint(window.innerWidth - 50, window.innerHeight - 50).click();
}