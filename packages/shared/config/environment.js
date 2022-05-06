// External dependencies
const dotenv = require('dotenv');
const { join } = require('path');

// Internal dependencies
const { supportedEnvs } = require('../src/utils/constants');
const { name } = require('../package.json');

let path;
const filename = '.env.';

const delimiter = name.indexOf('/') + 1;
let suffix = name.substring(delimiter, name.length);
suffix = suffix.toUpperCase();

if (process.env.NODE_ENV === supportedEnvs.PRODUCTION) {
  path = `/src/${filename}${process.env.NODE_ENV}`;
} else {
  path = `${join(__dirname, '../../..')}/${filename}${process.env.NODE_ENV}`;
}

dotenv.config({ path });

module.exports = {
  suffix,
};
