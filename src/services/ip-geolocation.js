const testData = {
    "ip": "140.212.174.7",
    "location": {
        "country": "US",
        "region": "New Jersey",
        "city": "Newark",
        "lat": 40.73566,
        "lng": -74.17237,
        "postalCode": "07101",
        "timezone": "-04:00",
        "geonameId": 5101798
    },
    "isp": "PANASONIC CORP OF NORTH AMERICA"
};


const options = {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" }
};

const API_KEY = 'at_b0jEA1f6p8fxadABpXz7zOZeTwGDO';

export const callAPI = (ipDirection) => {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipDirection}`;

    const result = '';

    fetch(url, options)
        .then(response => response.json())  // convert to json
        .then(json => console.log(json))    //print data to console
        .catch(err => {
            alert('request failed, test data was returned');
            return testData;
        }); // Catch errors

    return result;
}

/* export const callAPI = () => {
    const testData = {
        "ip": "140.212.174.7",
        "location": {
            "country": "US",
            "region": "New Jersey",
            "city": "Newark",
            "lat": 40.73566,
            "lng": -74.17237,
            "postalCode": "07101",
            "timezone": "-04:00",
            "geonameId": 5101798
        },
        "isp": "PANASONIC CORP OF NORTH AMERICA"
    };

    return testData;
}
 */