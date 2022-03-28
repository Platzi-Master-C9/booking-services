"use strict";

const getAddressSchema = {
  description: "Given latitude and longitude when a user select a mark in a map, then return an object with the address.",
  tags: ["Geolocation"],
  security: [{ Bearer: [] }],
  querystring: {
    type: "object",
    properties: {
      lon: { type: "number", description: "Longitude" },
      lat: { type: "number", description: "Latitude" },
    },
    required: ["lon", "lat"],
  },
};

module.exports = {
  getAddressSchema,
};
