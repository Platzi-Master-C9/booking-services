'use strict';

const MathServices 		= require('@booking-services/math');
const AdminPanelService = require('@booking-services/admin-panel')

const PluginLoader = require('fastify-plugin');

async function services(fastify) {

	await fastify.decorate('mathServices', MathServices)
	await fastify.decorate('adminPanelService', AdminPanelService)
}

module.exports = PluginLoader(services);
