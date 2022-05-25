// External dependencies
const { MongoDriver } = require('@booking-services/shared');
// Internal dependencies
const { prefix } = require('../../utils/constants')

module.exports = MongoDriver.createConnection(prefix);
