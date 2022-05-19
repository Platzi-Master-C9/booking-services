const dbWriter = require('./dbManagement/dbWriter');
const getPlaces = require('./dbManagement/getPlaces');
const dbDeleter = require('./dbManagement/dbDeleter');
const fileUploader = require('./fileHosting/fileUploader');

module.exports = {
    dbWriter,
    getPlaces,
    dbDeleter,
    fileUploader,
};
