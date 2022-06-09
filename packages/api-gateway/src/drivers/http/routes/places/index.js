const { placesAdapters } = require('../../adapters');
const {
	postPlaceSchema,
	getPlacesSchema,
	deletePlaceSchema,
	validateAddressSchema,
} = require('./schema');

async function placesRoute(fastify) {
	await fastify.post(
		'/',
		{
			schema: postPlaceSchema,
		},
		placesAdapters.postPlace
	);

	await fastify.get('/', { schema: getPlacesSchema }, placesAdapters.getPlaces);

	await fastify.delete(
		'/:id',
		{ schema: deletePlaceSchema },
		placesAdapters.deletePlace
	);

	await fastify.post(
		'/validate',
		{
			schema: validateAddressSchema,
		},
		placesAdapters.validateAddress
	);
}

module.exports = placesRoute;
