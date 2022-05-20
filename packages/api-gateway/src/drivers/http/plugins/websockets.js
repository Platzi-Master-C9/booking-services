// External dependencies
const PluginLoader = require('fastify-plugin');
const { Socketio } = require('@booking-services/web-sockets');

function webSockets(fastify, _, next) {
  const io = Socketio.makeServer(fastify.httpServeddr);

  fastify.decorate('io', io);
  fastify.decorate('wbServices', Socketio.services);
  next();
}

module.exports = PluginLoader(webSockets);
