const nodeGeocoder = require('node-geocoder');
const { nodeGeocoderOptions } = require('../../utils/constants');

const geoCoder = nodeGeocoder(nodeGeocoderOptions);

module.exports = geoCoder;
