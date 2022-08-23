import fetch from "node-fetch";

const API = 'https://geo.ipify.org/api/v2/country,city'
const apiKey = "at_b0jEA1f6p8fxadABpXz7zOZeTwGDO"

export async function fetchData(urlApi, ip) {
    const request = `${API}?apiKey=${apiKey}&ipAddress=${ip}`;
    const response = await fetch(request);
    const data = await response.json();

    return data;
}