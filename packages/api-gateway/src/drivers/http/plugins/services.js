'use strict';

const MathServices = require('@booking-services/math');

const PluginLoader = require('fastify-plugin');

async function services(fastify) {

	await fastify.decorate('mathServices', MathServices)
}

module.exports = PluginLoader(services);
