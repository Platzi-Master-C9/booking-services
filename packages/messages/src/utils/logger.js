// External dependencies
const Winston = require('winston');

// Setup
const logger = Winston.createLogger({
  format: Winston.format.json(),
  transports: [
    new Winston.transports.Console(),
  ],
});

module.exports = logger;
