async function postPlace(req, reply) {
  const {
    place_name: placeName,
    pricePerNightUsd: price_per_night_usd,
    hostId: host_id,
    type,
  } = req.body;

  req.log.info('[http-server]: posting a place');

  await this.placesService.postPlace({
    place_name: placeName,
    pricePerNightUsd: price_per_night_usd,
    hostId: host_id,
    type,
  });

  return reply.code(201)
    .header('Content-Type', 'application/json; chartset:utf-8')
    .send({ msg: `${place_name} has been saved correctly.` });
}

module.exports = {
  postPlace,
};