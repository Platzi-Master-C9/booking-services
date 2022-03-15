const express = require('express')
const pool = require('./src/drivers/postgresql/connection')
const app = express()

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

app.set('port', process.env.PORT || 4000)

app.get('/', function (req, res, next) {
  console.log('Get Inicial')
})

app.listen(4000, function () { console.log('Server is running.. on Port 4000') })
