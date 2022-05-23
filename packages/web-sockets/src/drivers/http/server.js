// External dependencies
const { createAdapter } = require('@socket.io/redis-adapter');
const { Server } = require('socket.io');

// Internal dependencies
const { pubClient, subClient } = require('../redis/connection');
const {
  credentials,
  methods,
  origin,
} = require('../../../config/socketio');

module.exports = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin,
      methods,
      credentials,
    },
  });
  io.adapter(createAdapter(pubClient, subClient));

  return io;
};
