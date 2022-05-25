const { MongoClient } = require('mongodb');
const { Logger } = require('@booking-services/shared');
const config = require('../../../config/mongodb');
const { dbOptions } = require('../../utils/constants');
const populate = require('../../utils/populate');
const placesSchema = require('../schemas/placesSchema'); // eslint-disable-line

const uri = `mongodb://${config.user}:${config.pass}@${config.uri}`;
const { dbName, collectionName } = dbOptions;
const client = new MongoClient(uri);

async function connect() {
  try {
    Logger.info({
      message: '[geolocation:mongodb]: Connecting to DB',
    });
    const connection = await client.connect();
    Logger.info({
      message: '[geolocation:mongodb]: Creating collection',
    });
    /* await connection.db(dbName).createCollection(collectionName, placesSchema);
    Logger.info({
      message: '[geolocation:mongodb]: Populating database',
    }); */
    const data = populate();
    await connection.db(dbName).collection(collectionName).insertMany(data);
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
