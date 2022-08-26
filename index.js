import express from 'express';
import cors from 'cors'
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const app = express();

import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/dist')));

async function getByIp(ip) {
    const ipFetch = 'http://geo.ipify.org/api/v2/country,city?apiKey=at_b0jEA1f6p8fxadABpXz7zOZeTwGDO&ipAddress=' + ip;
    const response = await fetch(ipFetch)
    const body = await response.json();

    return body;
}

app.get('/', async (request, response) => {
    response.send('Home')
});

app.get('/ip/:ipAddress', cors() ,async (request, response) => {
    const ip = request.params.ipAddress;
    var resultado = await getByIp(ip);
    response.send(resultado);
})



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})