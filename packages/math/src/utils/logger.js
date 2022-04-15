'use strict';

const Winston = require('winston');

const logger = Winston.createLogger({
	format: Winston.format.json(),
	transports: [
		new Winston.transports.Console(),
	],
});

module.exports = logger;
