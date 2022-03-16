'use strict';

const HttpServer = require('./drivers/http/server');

// These lines check if the package is working
const welcomeGeolocation = require("@booking-services/geolocation")
welcomeGeolocation.geolocationWelcome()

HttpServer.start()
	.catch(err => console.error('Something was wrong when the server was running', err));
