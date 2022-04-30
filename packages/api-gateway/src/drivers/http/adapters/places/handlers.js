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

  return reply.code(201)
    .header('Content-Type', 'application/json; chartset:utf-8')
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

module.exports = {
  postPlace,
  getPlaces,
};
