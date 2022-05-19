// External dependencies
const PluginLoader = require('fastify-plugin');
const { Socketio } = require('@booking-services/web-sockets');

function webSockets(fastify, _, next) {
  const io = Socketio.makeServer(fastify.httpServer);

  fastify.decorate('io', io);
  next();
}

module.exports = PluginLoader(webSockets);
