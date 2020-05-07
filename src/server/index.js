'use strict';
/**
* @description Connecting Express, Middleware and other dependences.
*/
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const aylien = require('aylien_textapi');
const serverless = require('serverless-http');

/**
* @description Setup empty JS object to act as endpoint for all routes.
*/
let projectData = {};

/**
* @description Creating an instance of the app.
*/
const app = express();
const router = express.Router();

/* Middleware*/
/**
* @description Here we are configuring express to use body-parser as middle-ware.
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
* @description Connecting Cors for cross origin allowance.
*/
app.use(cors());

/**
* @description Initialize the main project folder.
*/
app.use(express.static('dist'));

/**
* @description Route for opening the main page of the app.
*/
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

/**
* @description Installing the Alien API credentials.
*/
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

/**
* @description Route for getting data from the Aylien service and sending it to the client.
*/
app.post('/analysis', (request, response) => {
    projectData = {};
    let currentURL = request.body.url;
    textapi.sentiment({
        url: currentURL, 
        mode: 'document'
    }, function(error, data) {
        if (error === null) {
            projectData = {status: '200', ...data};
            response.send(projectData);
        } else {
            projectData = {status: '404', error, ...data};
            response.send(projectData);
        }
    });
});
  
app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);
