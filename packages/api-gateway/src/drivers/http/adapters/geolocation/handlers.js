async function getPlaces(req, reply) {
  const { lon, lat } = req.params;

  req.log.info("[http-server]: Getting places: ", { lon, lat });

  const places = await this.geolocationServices.getPlaces({ lon, lat });

  if (!places) {
    throw new Error('Error to get places!');
  }

  return reply
    .code(200)
    .header("Content-Type", "application/json; chartset:utf-8")
    .send({ places });
}

module.exports = {
  getPlaces,
};
