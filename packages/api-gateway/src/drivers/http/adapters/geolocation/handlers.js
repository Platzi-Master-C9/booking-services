"use strict";
const { faker } = require("@faker-js/faker");

function errorHandler(error, reply) {
  if (error.isBoom) {
    return reply.send(error.output.payload);
  }

  return reply.code(500).send({ error: error.message, stack: error.stack });
}

async function getPlaces(req, reply) {
  try {
    const { lon, lat, radius } = req.query;

    req.log.info("[http-server]: Getting places: ", { lon, lat, radius });

    //const places = await this.geolocationServices.getPlaces({ lon, lat });
    const places = [
      {
        placeId: faker.datatype.uuid(),
        placeName: faker.address.secondaryAddress(),
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
      },
      {
        placeId: faker.datatype.uuid(),
        placeName: faker.address.secondaryAddress(),
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
      },
      {
        placeId: faker.datatype.uuid(),
        placeName: faker.address.secondaryAddress(),
        lat: faker.address.latitude(),
        lon: faker.address.longitude(),
      },
    ];

    return reply
      .code(200)
      .header("Content-Type", "application/json; chartset:utf-8")
      .send(places);
  } catch (error) {
    errorHandler(error, reply);
  }
}

module.exports = {
  getPlaces,
};
