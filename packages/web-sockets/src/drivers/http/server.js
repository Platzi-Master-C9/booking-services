// External dependencies
const { createAdapter } = require('@socket.io/redis-adapter');
const { Logger } = require('@booking-services/shared');
const { Server } = require('socket.io');

// Internal dependencies
const { pubClient, subClient } = require('../redis/connection');
const { port } = require('../../../config/socketio');

const io = new Server();
io.adapter(createAdapter(pubClient, subClient));

function start() {
  try {
    io.listen(port);
  } catch (error) {
    Logger.debug(`[web-socket server]Something went wrong while enabling server ${error}`);
    process.exit(1);
  }
}

module.exports = {
  start,
  io,
};
