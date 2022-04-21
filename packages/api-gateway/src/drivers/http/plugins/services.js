// External dependencies
const PluginLoader = require('fastify-plugin');
const GeolocationServices = require('@booking-services/geolocation');
const MathServices = require('@booking-services/math');
const AdminPanelService = require('@booking-services/admin-panel');
const AuthServices = require('@booking-services/auth');
const placesServices = require('@booking-services/places');
const MessageServices = require('@booking-services/messages');

async function services(fastify) {
  await Promise.all([
    fastify.decorate('mathServices', MathServices),
    fastify.decorate('adminPanelService', AdminPanelService),
    fastify.decorate('messageServices', MessageServices),
    fastify.decorate('placesService', placesServices),
    fastify.decorate('authService', AuthServices),
    fastify.decorate('geolocationServices', GeolocationServices),
  ]);
}

module.exports = PluginLoader(services);
