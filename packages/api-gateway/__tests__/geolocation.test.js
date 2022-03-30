const boom = require("@hapi/boom");
const pluginLoader = require("fastify-plugin");
const { fastify } = require("../src/drivers/http/server");

test("given an object of type place, when it is required to write to the DB, it returns a status code 200", async () => {
  const places = await fastify.inject({
    method: "POST",
    url: "geolocation/place",
    body: {
      lon: -14.16546,
      lat: 40.16546,
      country: "México",
      state: "Monterey",
      city: "Cidad de Monterrey",
      zipcode: "165466",
      streetAddress: "av. pino suarez",
    },
  });
  expect(places.statusCode).toEqual(200);
});

test("given an object without some field like lon or lat, when it is required to write to the DB, it returns a status code 400", async () => {
  const places = await fastify.inject({
    method: "POST",
    url: "geolocation/place",
    body: {
      country: "México",
      state: "Monterey",
      city: "Cidad de Monterrey",
      zipcode: "165466",
      streetAddress: "av. pino suarez",
    },
  });
  expect(places.statusCode).toEqual(400);
});
