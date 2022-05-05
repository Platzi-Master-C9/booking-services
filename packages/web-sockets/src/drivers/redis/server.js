// External dependencies
const { Server } = require('socket.io');

// Internal dependencies
const { Logger } = require('@booking-services/shared');

const io = new Server();

async function start() {
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
