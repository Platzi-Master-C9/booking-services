const dotenv = require('dotenv');
const { join } = require('path');

const { supportedEnvs } = require('../src/utils/constants');

let environment = '';
const filename = '.env'
let path = `/src/${filename}`;

dotenv.config({ path });

module.exports = environment;

