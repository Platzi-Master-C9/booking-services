// External dependencies
const { createAdapter } = require('@socket.io/redis-adapter');
const { Logger } = require('@booking-services/shared');
const { Server } = require('socket.io');

// Internal dependencies
const { pubClient, subClient } = require('../redis/connection');

const io = new Server();
io.adapter(createAdapter(pubClient, subClient));

function start() {
  try {
    io.listen(process.env.SERVER_PORT || 3000);
  } catch (error) {
    Logger.debug(`[web-socket server]Something went wrong while enabling server ${error}`);
    process.exit(1);
  }
}

module.exports = {
  start,
  io,
};
