const { MongoClient } = require('mongodb');
const boom = require('@hapi/boom');

const { user, pass, uri } = require('../../../config/mongodb');
const { dbOptions } = require('../../utils/constants');
const { Logger } = require('@booking-services/shared');

const URL = `mongodb://${user}:${pass}@${uri}`;
const { name, collection } = dbOptions;
const client = new MongoClient(URL);
let results;

/**
 * @description return the connection with the db
 * @returns returns the collection to query
 * @example
 * const collection = await connect()
 * const places = collection.find()
 */

async function connect(method, options) {
  try {
    await client.connect();
    Logger.info({
      message: '[geolocation:mongodb]: Connection succesfully to server',
    });
    // eslint-disable-next-line
    results = await client
      .db(name)
      .collection(collection)
      [method](...options);
  } catch (error) {
    Logger.error({
      message: `[geolocation:mongodb]: Could not connect to database ${error}`,
    });
  } finally {
    client.close();
  }

  // eslint-disable-next-line
  return results;
}

module.exports = connect;
