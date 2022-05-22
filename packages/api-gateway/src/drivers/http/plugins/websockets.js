// External dependencies
const PluginLoader = require('fastify-plugin');
const socketioConfig = require('@booking-services/web-sockets');

function webSockets(fastify, _, next) {
  const io = socketioConfig(fastify.server);

  fastify.decorate('io', io);
  next();
}
module.exports = PluginLoader(webSockets);
