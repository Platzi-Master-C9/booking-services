const dbWriter = require('./dbManagement/dbWriter');
const getPlaces = require('./dbManagement/getPlaces');
const dbDeleter = require('./dbManagement/dbDeleter');

module.exports = {
    dbWriter,
    getPlaces,
    dbDeleter,
};
