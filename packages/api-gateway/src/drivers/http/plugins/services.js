'use strict';

const MathServices = require('@booking-services/math');
const placesServices = require('@booking-services/places')

const PluginLoader = require('fastify-plugin');

async function services(fastify) {

	await fastify.decorate('mathServices', MathServices)
	await fastify.decorate('placesServices', placesServices)
}

module.exports = PluginLoader(services);
