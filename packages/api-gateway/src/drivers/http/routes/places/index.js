const { placesAdapters } = require('../../adapters');
const {
	postPlaceSchema,
	getPlacesSchema,
	deletePlaceSchema,
	getPlaceSchema,
} = require('./schema');

async function placesRoute(fastify) {
	await fastify.post(
		'/',
		{ schema: postPlaceSchema },
		placesAdapters.postPlace
	);

	await fastify.get('/', { schema: getPlacesSchema }, placesAdapters.getPlaces);

	await fastify.delete(
		'/:id',
		{ schema: deletePlaceSchema },
		placesAdapters.deletePlace
	);

	await fastify.get(
		'/:id',
		{
			schema: getPlaceSchema,
		},
		placesAdapters.getPlace
	);
}

module.exports = placesRoute;
