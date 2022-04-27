'use strict';

const Mongoose = require('mongoose');

const config = require('../../../config/mongodb');
const Logger = require('../../utils/logger');

Mongoose.Promise = global.Promise;

const db = Mongoose.createConnection(config.uri, {
	useNewUrlParser: true,
	auth: {
		username: config.user,
		password: config.pass,
	}
});

db.on('error', function (err) {

	Logger.error(`[mongodb_data_monitoring]: Connection error event ${err.message}`);
	process.exit(1);
});

db.once('open', () => Logger.info('[mongodb_data_monitoring]: Connection oppened'));
db.once('connected', () => Logger.debug('[mongodb_data_monitoring]: Client connection oppened'));
db.once('disconnected', () => Logger.debug('[mongodb_data_monitoring]: Client was disconnected'));

process.on('SIGINT', function () {
	db.close(function() {
		Logger.info('[mongodb_data_monitoring]: Connection was forced to be disconencted');

		process.exit(1);
	});
});

module.exports = db;

