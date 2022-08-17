export function updateUI(data) {
    const elementIp = document.querySelector('#information > .data.ip > p:last-child')
    const elementLocation = document.querySelector('#information > .data.location > p:last-child')
    const elementTimeZone = document.querySelector('#information > .data.timezone > p:last-child')
    const elementIsp = document.querySelector('#information > .data.isp > p:last-child')

    const location = `${data.location.region}, ${data.location.city} ${data.location.postalCode}`;
    const timeZone = `UTC ${data.location.timezone}`;

    elementIp.textContent = data.ip;
    elementLocation.textContent = location;
    elementTimeZone.textContent = timeZone;
    elementIsp.textContent = data.isp;

    document.elementFromPoint(window.innerWidth - 50, window.innerHeight - 50).click();
}