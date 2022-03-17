"use strict";

const getAddressSchema = {
  type: "object",
  properties: {
    lon: { type: "number" },
    lat: { type: "number" },
  },
  required: ["lon", "lat"],
};

module.exports = {
  getAddressSchema,
};
