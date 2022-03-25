const { app } = require("../../drivers/http/server");

describe("geolocation/address endpoint", () => {
  const api = app;

  test("Given latitude and longitude when a user select a mark in a map, then return status code 200", async () => {
    const address = await api.inject({
      method: "GET",
      url: "geolocation/address",
      query: { lat: 45.16546, lon: 46.14786 },
    });

    expect(address.statusCode).toEqual(200);
  });

  test("Given wrong or null latitude and longitude when a user select a mark in a map, then return status code 400 ", async () => {
    const address = await api.inject({
      method: "GET",
      url: "geolocation/address",
    });

    expect(address.statusCode).toEqual(400);
  });

  test("Given latitude and longitude when a user select a mark in a map, then return an object with the address of the point", async () => {
    const address = await api.inject({
      method: "GET",
      url: "geolocation/address",
      query: { lat: 45.16546, lon: 46.14786 },
    });
    expect(JSON.parse(address.body)).toEqual(
      expect.objectContaining({
        address: expect.objectContaining({
          placeName: expect.any(String),
          placeAddress: expect.any(String),
        }),
      })
    );
  });
});
