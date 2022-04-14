const { MongoClient } = require('mongodb');
const boom = require('@hapi/boom');

const { user, pass, uri } = require('../../../config/mongodb');
const { dbOptions } = require('../../utils/constants');

const URL = `mongodb://${user}:${pass}@${uri}`;
const { name, collection } = dbOptions;
const client = new MongoClient(URL);
let results;

async function connect(method, options) {
  try {
    await client.connect();
    results = await client.db(name).collection(collection)[method](...options);
  } catch (error) {
    throw boom.notFound('[geolocation:DB-Connection]: something happened when the request/connection to the DB was made: ', error);
  } finally {
    client.close();
  }
  return results;
}

module.exports = connect;
