"use strict";

module.exports = {
  querystring: {
    type: "object",
    properties: {
      lon: { type: "number" },
      lat: { type: "number" },
      radius: { type: "number" },
    },
    required: ["lon", "lat", "radius"],
  },
};
