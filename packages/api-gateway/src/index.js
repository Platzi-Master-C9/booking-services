'use strict';

const HttpServer = require('./drivers/http/server');

// These lines check if the package is working
const welcomeGeolocation = require("@booking-services/geolocation")
welcomeGeolocation.geolocationWelcome()

HttpServer.start()
	.catch(err => console.error('Somethin went wrong running server', err));
