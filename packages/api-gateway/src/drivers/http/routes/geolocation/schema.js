"use strict";

const getPlacesSchema = {
  type: "object",
    properties: {
      lon: { type: "number" },
      lat: { type: "number" },
      radius: { type: "number" },
    },
    required: ["lon", "lat", "radius"],
};

module.exports = {
  getPlacesSchema,
};
