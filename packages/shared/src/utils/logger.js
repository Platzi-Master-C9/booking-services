const Winston = require('winston');

const Logger = Winston.createLogger({
  format: Winston.format.json(),
  transports: [
    new Winston.transports.Console(),
  ],
});

module.exports = Logger;
