import axios from "axios";

const API = 'https://geo.ipify.org/api/v2/country,city'
const apiKey = "at_b0jEA1f6p8fxadABpXz7zOZeTwGDO"

export async function searchByIp(ip) {
    let dataResult;
    const request = `${API}?apiKey=${apiKey}&ipAddress=${ip}`;
    await axios.get(request)
        .then(res => dataResult = res.data).then(res => console.log(res));
    return dataResult
}


searchByIp('192.1.66.66')
// TODO: Buscar forma de ejecutar la solicitud en el navegador, o hacer la búsqueda para hacerla desde el backend