var path = require('path');
const dotenv = require('dotenv');
dotenv.config();

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

/* Middleware */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Initialize the main project folder*/
app.use(express.static('dist'));

// Defines the port number 
const port = 8888;

/* Spin up the server*/
const server = app.listen(port, listening);

function listening () {
    console.log(`Server is running!`);
    console.log(`Running on localhost: ${port}`);
};

// Declare API Keys
const weatherBit = process.env.API_KEY_WEATHERBIT;
const geoName = process.env.API_KEY_GEONAME;
const pixaBay = process.env.API_KEY_PIXABAY;

// GET Route
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

// GET Route - GeoName API
app.post('/place', async(req, res) => {
    const place = req.body.inputPlace;
    const user = req.body.inputUsername;
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${place}&fuzzy=0.8&maxRows=1&username=${geoName}`);

    try {
        const data = await response.json();
        res.send(data);
        console.log(`fetchPlace : ${fetchPlace}`);
    } catch (error) {
        console.log(`error : ${error}`);
    };
});

// GET Route - WeatherBit API
app.post('/forecast', async(req, res) => {
    const latitude = req.body.inputLat;
    const longitude = req.body.inputLng;
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${weatherBit}`);

    try {
        const data = await response.json();
        res.send(data);
        console.log(`fetchForecast : ${fetchForecast}`);
    } catch (error) {
        console.log(`error : ${error}`);
    };
});

// GET Route - PixaBay API
app.post('/image', async(req, res) => {
    const City = req.body.city;
    const Country = req.body.country;
    const response = await fetch(`https://pixabay.com/api/?key=${pixaBay}&q=${City}+travel&image_type=photo&orientation=horizontal`);

    try {
        const data = await response.json();
        res.send(data);
        console.log(`fetchImage : ${fetchImage}`);
    } catch (error) {
        console.log(`error : ${error}`);
    };
});

// GET Route - PixaBay API
app.post('/countryImage', async(req, res) => {
    const City = req.body.city;
    const Country = req.body.country;
    const response = await fetch(`https://pixabay.com/api/?key=${pixaBay}&q=${Country}+travel&image_type=photo&orientation=horizontal`);

    try {
        const data = await response.json();
        res.send(data);
        console.log(`fetchCountryImage : ${fetchCountryImage}`);
    } catch (error) {
        console.log(`error : ${error}`);
    };
});

// GET Route - RestCountry API
app.post('/countryInfo', async(req, res) => {
    const CountryCode = req.body.countryCode;
    const response = await fetch(`https://restcountries.com/v2/alpha?codes=${CountryCode}`);

    try {
        const data = await response.json();
        res.send(data);
        console.log(`fetchCountryInfo : ${fetchCountryInfo}`);
    } catch (error) {
        console.log(`error : ${error}`);
    };
});