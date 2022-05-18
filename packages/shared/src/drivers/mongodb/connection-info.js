// Internal dependencies
const Logger = require('../../utils/logger');

const setupMongoEvents = (connection) => {
  connection.on('error', (err) => {
    Logger.error(`[mongo-connection]: Connection error event ${err.message}`);
    process.exit(1);
  });

  connection.once('open', () => Logger.info('[mongodb]: Connection opened'));
  connection.once('connected', () => Logger.debug('[mongodb]: Client connection opened'));
  connection.once('disconnected', () => Logger.debug('[mongodb]: Client was disconnected'));

  process.on('SIGINT', () => {
    connection.close(() => {
      Logger.info('[mongo-connection]: Connection was forced to be disconnected');

      process.exit(1);
    });
  });
};

module.exports = { setupMongoEvents };
