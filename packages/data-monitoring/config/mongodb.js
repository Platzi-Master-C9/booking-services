'use strict';

const prefix = require('./environment');

module.exports = {
	uri: process.env[`MONGO_URI`],
	user: process.env[`MONGO_USER`],
	pass: process.env[`MONGO_PASS`],
}

