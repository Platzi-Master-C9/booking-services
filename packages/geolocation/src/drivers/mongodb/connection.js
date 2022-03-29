const { MongoClient } = require('mongodb');

const config = require('../../../config/mongodb');
const { dbOptions } = require('../../utils/constants');
const Logger = require('../../utils/logger');

const uri = `mongodb://${config.user}:${config.pass}@${config.uri}`;
const name = dbOptions.name;
const collection = dbOptions.collection;
const client = new MongoClient(uri);

//create the connection with the db

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
    client.close();
    process.exit(1);
  }
}

module.exports = connect;
