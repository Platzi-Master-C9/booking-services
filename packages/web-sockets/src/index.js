// Internal dependencies
const { Logger } = require('@booking-services/shared');
const WbServer = require('./drivers/wb/server');

WbServer.start()
  .catch((error) => Logger.debug(`[web-socket server] Something went wrong running server ${error}`));
