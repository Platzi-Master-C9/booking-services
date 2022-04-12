async function postPlace(req, reply) {
  const {
    placeName, pricePerNightUsd, hostId, type,
  } = req.body;

  req.log.info('[http-server]: posting a place');

  await this.placesService.postPlace({
    placeName, pricePerNightUsd, hostId, type,
  });

  return reply.code(201)
    .header('Content-Type', 'application/json; chartset:utf-8')
    .send({ msg: `${placeName} has been saved correctly.` });
}

module.exports = {
  postPlace,
};
