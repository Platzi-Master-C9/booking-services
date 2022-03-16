'use strict';

//const MathServices = require('@booking-services/math');
const GeolocationServices = require('@booking-services/geolocation');

const PluginLoader = require('fastify-plugin');

async function services(fastify) {

	//await fastify.decorate('mathServices', MathServices)
	await fastify.decorate('geolocationServices', GeolocationServices)
}

module.exports = PluginLoader(services);
