const { fastify } = require("../src/drivers/http/server");

describe("geolocation/address endpoint", () => {
  const api = fastify;

  test("Given latitude and longitude when a user select a mark in a map, then return status code 200 and an object with the address", async () => {
    const address = await api.inject({
      method: "GET",
      url: "geolocation/address",
      query: { lat: 45.16546, lon: 46.14786 },
    });

    expect(address.statusCode).toEqual(200);
    expect(JSON.parse(address.body)).toEqual(
      expect.objectContaining({
        address: expect.objectContaining({
          country: expect.any(String),
          city: expect.any(String),
          zipCode: expect.any(String),
          streetAddress: expect.any(String),
        }),
      })
    );
  }, 10000);

  test("Given wrong or null latitude and longitude when a user select a mark in a map, then return status code 400 ", async () => {
    const address = await api.inject({
      method: "GET",
      url: "geolocation/address",
    });

    expect(address.statusCode).toEqual(400);
  }, 10000);
});
