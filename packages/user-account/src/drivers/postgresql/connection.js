const { Pool } = require('pg');
const dotenv = require('dotenv')
dotenv.config()

const configPostresql = require('../../../config/postgresql')
const DATABASE_URL = `postgres://${configPostresql.dbUser}:${configPostresql.dbPass}@${configPostresql.dbHost}:${configPostresql.dbPort}/postgres`
console.log(DATABASE_URL);

const pool = new Pool({
  connectionString: DATABASE_URL
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

module.exports = pool;