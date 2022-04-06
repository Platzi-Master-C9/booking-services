const Winston = require('winston');

const logger = Winston.createLogger({
    format: Winston.format.json(),
});

module.exports = logger;
