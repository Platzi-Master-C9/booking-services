'use strict';

const { statusAdapters } = require('../../adapters');

module.exports = async function status(fastify) {

	await fastify.get('/', statusAdapters.liveness);
}