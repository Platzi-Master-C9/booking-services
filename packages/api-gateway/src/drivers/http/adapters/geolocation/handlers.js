function errorHandler(error, reply) {
  if (error.isBoom) {
    return reply.send(error.output.payload);
  }

  return reply.code(500).send({ error: error.message, stack: error.stack });
}

async function getPlaces(req, reply) {
  try {
    const { lon, lat, radius } = req.query;

    req.log.info('[http-server]: Getting places: ', { lon, lat, radius });

    const places = await this.geolocationServices.getPlaces(lat, lon, radius);

    return reply
      .code(200)
      .header('Content-Type', 'application/json; chartset:utf-8')
      .send(places);
  } catch (error) {
    return errorHandler(error, reply);
  }
}

async function getAddress(req, reply) {
  try {
    const { lon, lat } = req.query;

    req.log.info('[http-server]: Getting address: ', { lon, lat });

    const address = await this.geolocationServices.getAddress(lat, lon);

    return reply
      .code(200)
      .header('Content-Type', 'application/json; chartset:utf-8')
      .send(address);
  } catch (error) {
    return errorHandler(error, reply);
  }
}

async function deletePlace(req, reply) {
  try {
    const { placeId } = req.query;

    req.log.info('[http-server]: Deleting place in Geolocation database: ', {
      placeId,
    });

    const placeDeleted = await this.geolocationServices.deletePlace(placeId);

    return reply
      .code(200)
      .header('Content-Type', 'application/json; chartset:utf-8')
      .send({
        placeId: placeDeleted,
        message: 'geolocation place deleted successfully',
      });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

module.exports = {
  getPlaces,
  getAddress,
  deletePlace,
};
