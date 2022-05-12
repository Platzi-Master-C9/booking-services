// External packages
const { createMongoConnection } = require('@booking-services/shared');
// Internal packages
const { name } = require('../../../package.json');

const connection = createMongoConnection(name);

module.exports = connection;
