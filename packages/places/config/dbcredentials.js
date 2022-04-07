const prefix = require('./environment');

module.exports = {
    db: process.env[`${prefix}MYSQL_DB`],
    user: process.env[`${prefix}MYSQL_USER`],
    pass: process.env[`${prefix}MYSQL_PASS`],
    host: process.env[`${prefix}MYSQL_HOST`],
    cloudinary: process.env[`${prefix}CLOUDINARY_URL`],
};
