// External dependencies
const { Logger } = require('@booking-services/shared');
// Internal dependencies
const HttpServer = require('./drivers/http/server');

HttpServer.start()
  .catch((err) => Logger.debug(`[Http-server]Something went wrong running server ${err}`));

HttpServer.fastify.ready().then(() => {
  HttpServer.fastify.io.on('connection', () => {
    Logger.info('[wb-sockets] Client connected');
  });
});
