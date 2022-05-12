// External dependencies
const { createMongoConnection } = require('@booking-services/shared');
// Internal dependencies
const { preffix } = require('../../utils/constants');

const connection = createMongoConnection(preffix);

module.exports = connection;
