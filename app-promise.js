const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .option({
        a: {
            demand: false,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodeAddress;
if (typeof argv.address === 'undefined') {
    encodeAddress = 'Longxuyen, Angiang, Vietnam';
} else {
    encodeAddress = encodeURIComponent(argv.address);
}

var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
const key = '8aedcd94c201d560d24926a3964ccd3a';

axios.get(geocodeUrl)
    .then(response => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find the address');
        }

        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherUrl = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;

        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);

    }).then(response => {
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}, it feels like ${apparentTemperature}`);

    }).catch(e => {
        if (e.code === 'ENOTFOUND') {
            console.log('Unable to connect to API servers');
        } else {
            console.log(e.message);
        }
    });