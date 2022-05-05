const geolocationServices = require('../../../../../mocks/geolocationServices.mock');

function errorHandler(error, reply) {
  if (error.isBoom) {
    return reply.code(error.output.payload.statusCode).send(error.output.payload);
  }

  return reply.code(500).send({ error: error.message, stack: error.stack });
}

async function createPlace(req, reply) {
  try {
    const {
      location,
      country,
      state,
      city,
      zipcode,
      streetAddress,
      placeDBId,
      price,
    } = req.body;

    req.log.info(
      '[http-server]: Creating place: ',
      {
        location,
        country,
        state,
        city,
        zipcode,
        streetAddress,
        placeDBId,
        price,
      },
    );

    const placeId = await this.geolocationServices.createPlace(
      location,
      country,
      state,
      city,
      zipcode,
      streetAddress,
      placeDBId,
      price,
    );

    return reply
      .code(200)
      .header('Content-Type', 'application/json; chartset:utf-8')
      .send({ id: placeId });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

async function getPlaces(req, reply) {
  try {
    const { lon, lat, radius } = req.query;

    req.log.info('[http-server]: Getting places: ', { lon, lat, radius });

    // const places = await this.geolocationServices.getPlaces( lon, lat, radius );
    const places = await geolocationServices.mockGetPlaces(lat, lon, radius);

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

    req.log.info('[http-server]: Getting address with reverse geocoding: ', {
      lon,
      lat,
    });

    // const address = await this.geocolocationServices.getAddress(lat, lon);
    const address = await geolocationServices.mockGetAddress(lat, lon);

    return reply
      .code(200)
      .header('Content-Type', 'application/json; chartset:utf-8')
      .send(address);
  } catch (error) {
    return errorHandler(error, reply);
  }
}

async function updatePlace(req, reply) {
  try {
    const { id, address } = req.query;
    const placeId = await this.geolocationServices.updatePlace(id, address);
    return reply
      .code(200)
      .header('Content-Type', 'application/json; chartset:utf-8')
      .send({ id: placeId });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

module.exports = {
  createPlace,
  getPlaces,
  getAddress,
  updatePlace,
};
