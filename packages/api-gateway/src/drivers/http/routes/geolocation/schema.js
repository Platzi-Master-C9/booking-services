const getPlaceSchema = {
  type: "object",
  properties: {
    lon: { type: "number" },
    lat: { type: "number" },
    country: { type: "string" },
    state: { type: "string" },
    city: { type: "string" },
    zipcode: { type: "string" },
    streetAddress: { type: "string" },
  },
  required: [lon, lat, country, state, city, zipcode, streetAddress],
};

module.exports = {
  getPlaceSchema: getPlaceSchema,
};
