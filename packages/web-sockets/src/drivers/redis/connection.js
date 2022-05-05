// External dependencies
const { createClient } = require('redis');

// Internal dependencies
const { url } = require('../../../config/redis');

const pubClient = createClient({ url });
const subClient = pubClient.duplicate();

module.exports = {
  pubClient,
  subClient,
};
