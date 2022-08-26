import express from 'express';
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

async function getByIp(ip) {
    const ipFetch = 'http://geo.ipify.org/api/v2/country,city?apiKey=at_b0jEA1f6p8fxadABpXz7zOZeTwGDO&ipAddress=' + ip;
    const response = await fetch(ipFetch)
    const body = await response.json();

    return body;
}

app.get('/ip/:ipAddress', async (request, response) => {
    const ip = request.params.ipAddress;
    var resultado = await getByIp(ip);
    response.send(resultado);
})

const PORT = '3000'
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})