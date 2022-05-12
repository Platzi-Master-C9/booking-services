// Internal dependencies
const Logger = require('../../utils/logger');

const showConnectionInfo = (connection) => {
  connection.on('error', (err) => {
    Logger.error(`[mongoconnection]: Connection error event ${err.message}`);
    process.exit(1);
  });

  connection.once('open', () => Logger.info('[mongodb]: Connection oppened'));
  connection.once('connected', () => Logger.debug('[mongodb]: Client connection oppened'));
  connection.once('disconnected', () => Logger.debug('[mongodb]: Client was disconnected'));

  process.on('SIGINT', () => {
    connection.close(() => {
      Logger.info('[mongoconnection]: Connection was forced to be disconnected');

      process.exit(1);
    });
  });
};

module.exports = showConnectionInfo;
