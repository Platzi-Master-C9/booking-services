"use strict";

const getPlacesSchema = {
  description:
    "Given latitude, longitude and radius when a user select a mark in a map, then return an array with near places details from database.",
  tags: ["Geolocation"],
  security: [{ Bearer: [] }],
  querystring: {
    type: "object",
    properties: {
      lon: { type: "number", description: "Longitude" },
      lat: { type: "number", description: "Latitude" },
      radius: {
        type: "number",
        description: "Radius around a point on the map",
      },
    },
    required: ["lon", "lat", "radius"],
  },
};

module.exports = {
  getPlacesSchema,
};
