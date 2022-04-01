const { places } = require('../../adapters');
const schema = require('./schema');

async function placesRoute(fastify) {
	await fastify.post('/', { schema }, places.places);
}

module.exports = placesRoute;
