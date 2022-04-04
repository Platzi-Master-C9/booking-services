const { placesAdapters } = require('../../adapters');
const schema = require('./schema');

async function placesRoute(fastify) {
	await fastify.post('/', { schema }, placesAdapters.places);
}

module.exports = placesRoute;
