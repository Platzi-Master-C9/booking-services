const placesService = require('@booking-services/places');

const PluginLoader = require('fastify-plugin');

async function services(fastify) {

	await fastify.decorate('places', placesService)
}

module.exports = PluginLoader(services);
