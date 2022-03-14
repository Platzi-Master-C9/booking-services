const { MongoClient } = require('mongodb');

const config = require('../../../config/mongodb');
const { dbOptions } = require('../../utils/constants');

const uri = `mongodb://${config.user}:${config.pass}@${config.uri}`;
const name = dbOptions.name;
const collection = dbOptions.collection;
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    return client.db(name).collection(collection);
  } catch (error) {
    console.log(error);
  }
}

module.exports = connect;
