'use strict'

// Services
const { mathServices } = require('./useCases');

// Domains
const { MathModel } = require('./domains');

module.exports = {
	sumOperation: mathServices.sumOperation(MathModel),
}