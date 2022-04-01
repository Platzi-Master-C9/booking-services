'use strict';

const MathServices 		= require('@booking-services/math');
const GeolocationServices = require('@booking-services/geolocation');
const AdminPanelService = require('@booking-services/admin-panel')

const PluginLoader = require('fastify-plugin');

async function services(fastify) {

	await fastify.decorate('mathServices', MathServices)
	await fastify.decorate('geolocationServices', GeolocationServices)
	await fastify.decorate('adminPanelService', AdminPanelService)
}

module.exports = PluginLoader(services);
