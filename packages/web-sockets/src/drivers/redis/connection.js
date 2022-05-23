// External dependencies
const { Cluster } = require('ioredis');
const { Logger } = require('@booking-services/shared');

// Internal dependencies
const { host, port, password } = require('../../../config/redis');

// TODO If we have multiple servers add credentials variables in those servers
const pubClient = new Cluster([
  {
    host,
    port,
    password,
  },
]);
const subClient = pubClient.duplicate();

pubClient.on('error', (error) => {
  Logger.error(`[redis-pubClient] Connection error message ${error.message}`);
  process.exit(1);
});

subClient.on('error', (error) => {
  Logger.error(`[redis-subClient] Connection error message ${error.message}`);
  process.exit(1);
});

pubClient.once('wait', () => Logger.info('[redis-pubclient]: The client is waiting for instructions'));
subClient.once('wait', () => Logger.info('[redis-subclient]: the client is waiting for instructions'));

pubClient.once('ready', () => Logger.info('[redis-pubclient]: The client is ready'));
subClient.once('ready', () => Logger.info('[redis-subclient]: the client is ready'));

pubClient.once('connect', () => Logger.debug('[redis-pubClient]: Establish client  connection'));
subClient.once('connect', () => Logger.debug('[redis-subClient]: Establish client  connection'));

pubClient.once('close', () => Logger.debug('[redis-pubClient] Client connection was closed'));
subClient.once('close', () => Logger.debug('[redis-subClient] Client connection was closed'));

process.on('SIGINT', () => {
  pubClient.quit();
  subClient.quit();

  Logger.info('[redis] pubClient and subClient were forced to be disconnected');

  process.exit(1);
});

module.exports = {
  pubClient,
  subClient,
};
