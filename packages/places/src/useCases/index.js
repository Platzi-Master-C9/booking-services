const dbWriter = require('./dbManagement/dbWriter');
const getPlaces = require('./dbManagement/getPlaces');
const dbDeleter = require('./dbManagement/dbDeleter');
const getPlace = require('./dbManagement/getPlace');

module.exports = {
	dbWriter,
	getPlaces,
	dbDeleter,
	getPlace,
};
