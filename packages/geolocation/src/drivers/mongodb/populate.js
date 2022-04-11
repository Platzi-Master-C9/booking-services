const { MongoClient } = require('mongodb');

const config = require('../../../config/mongodb');
const { dbOptions } = require('../../utils/constants');
const Logger = require('../../utils/logger');
const { placesSchema, populate } = require('../../utils/syncDatabase');

const uri = `mongodb://${config.user}:${config.pass}@${config.uri}`;
const name = dbOptions.name;
const collection = dbOptions.collection;
const client = new MongoClient(uri);

//create the connection with the db

async function connect() {
  try {
    Logger.info({
      message: '[geolocation:mongodb]: Connecting to DB',
    });
    const connection = await client.connect();
    Logger.info({
      message: '[geolocation:mongodb]: Creating collection',
    });
    await connection.db(name).createCollection(collection, placesSchema);
    Logger.info({
      message: '[geolocation:mongodb]: Populating database',
    });
    const data = populate();
    await connection.db(name).collection(collection).insertMany(data);
    Logger.info({
      message: '[geolocation:mongodb]: Populating database done',
    });
    client.close();
  } catch (error) {
    Logger.error({
      message: `[geolocation:mongodb]: ${error}`,
    });
    client.close();
  }
}

connect();
