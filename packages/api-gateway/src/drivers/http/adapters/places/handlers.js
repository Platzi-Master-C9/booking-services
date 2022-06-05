async function postPlace(req, reply) {
	const {
		place_name: placeName,
		price_per_night_usd: pricePerNightUsd,
		host_id: hostId,
		type,
	} = req.body;

	req.log.info('[http-server]: posting a place');

	await this.placesService.postPlace({
		place_name: placeName,
		price_per_night_usd: pricePerNightUsd,
		host_id: hostId,
		type,
	});

	return reply
		.code(201)
		.send({ msg: `${placeName} has been saved correctly.` });
}

async function getPlaces(req, reply) {
	req.log.info('[http-server]: reading places');

	let places;
	try {
		places = await this.placesService.getPlaces();
	} catch (error) {
		return reply.code(500).send({
			message: 'Could not get places',
		});
	}

	return reply.code(200).send({
		total: places.length,
		places,
	});
}

async function deletePlace(req, reply) {
	const { id } = req.params;

	req.log.info('[http-server]: deleting a place');

	try {
		await this.placesService.deletePlace(id);
	} catch (error) {
		return reply.code(404).send({
			message: 'Incorrect id',
		});
	}

	return reply.code(200).send({
		message: `The place with the id ${id} has been deleted correctly.`,
	});
}

async function getPlace(req, reply) {
	try {
		const { id } = req.query;

		req.log.info('[http-server]: Getting a place: ', { id });

		const place = await this.placesServices.getPlace(id);

		return reply
			.code(200)
			.header('Content-Type', 'application/json; charset=utf-8')
			.send({ data: place });
	} catch (error) {
		return errorHandler(error, reply);
	}
}

module.exports = {
	postPlace,
	getPlaces,
	deletePlace,
	getPlace,
};
