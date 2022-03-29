'use strict';

const MathServices 		= require('@booking-services/math');
const AdminPanelService = require('@booking-services/admin-panel')
// const AuthServices = require("@booking-services/auth")

const PluginLoader = require('fastify-plugin');

async function services(fastify) {

	await fastify.decorate('mathServices', MathServices)
	await fastify.decorate('adminPanelService', AdminPanelService)
	// await fastify.decorate('authService', AuthServices)

}

module.exports = PluginLoader(services);
