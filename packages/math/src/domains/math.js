'use strict';

const { Schema } = require('mongoose');

const connection = require('../drivers/mongodb/connection');

const Math = new Schema({
	operation: { type: String, required: true },
	input: { type: String, required: true },
	result: { type: String, required: true },
}, { timestamps: true });

module.exports = connection.model('maths', Math);
