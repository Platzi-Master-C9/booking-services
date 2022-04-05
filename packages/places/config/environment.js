const dotenv = require('dotenv');
const { join } = require('path');

const supportedEnvs = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
};

let environment;
let path;
const filename = '.env';

switch (process.env.NODE_ENV) {
case supportedEnvs.PRODUCTION: {
    environment = '';
    path = `/src/${filename}`;
    break;
}
default: {
    environment = 'DEV_';
    path = `${join(__dirname, '../../..')}/${filename}`;
}
}

dotenv.config({ path });

module.exports = environment;
