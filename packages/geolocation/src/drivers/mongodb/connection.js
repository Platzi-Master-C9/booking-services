const { MongoClient } = require('mongodb');

const config = require('../../../config/mongodb');
const { dbOptions } = require('../../utils/constants');
const Logger = require('../../utils/logger');

const uri = `mongodb://${config.user}:${config.pass}@${config.uri}`;
const name = dbOptions.name;
const collection = dbOptions.collection;
const client = new MongoClient(uri);

/**
 * @description return the connection with the db
 * @returns returns the collection to query
 * @example
 * const collection = await connect()
 * const places = collection.find()
 */

async function connect() {
  try {
    await client.connect();
    Logger.info({
      message: '[geolocation:mongodb]: Connection succesfully to server',
    });
    return client.db(name).collection(collection);
  } catch (error) {
    Logger.error({
      message: `[geolocation:mongodb]: Could not connect to database ${error}`,
    });
  }
}

module.exports = connect;
