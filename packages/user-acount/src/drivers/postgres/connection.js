const { Pool } = require ('pg');
const { sequelize } = require('sequelize/types');

const { config } = require('./../../../config/config');
const setupModels = require('./../postgres/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({connectionString: URI});  

setupModels(sequelize);

module.exports = {
  development: {
    url: URI,
    dialect:'postgres',
  },
  production:{
    url: URI ,
    dialect:'postgres',
  }
}