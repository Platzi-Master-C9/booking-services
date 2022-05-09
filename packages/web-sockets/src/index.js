// Internal dependencies
const { Logger } = require('@booking-services/shared');
const HTTPServer = require('./drivers/http/server');

HTTPServer.start()
  .catch((error) => Logger.debug(`[web-socket server] Something went wrong running server ${error}`));
