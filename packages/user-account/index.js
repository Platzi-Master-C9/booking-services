const express = require('express');
const { pool } = require('./src/drivers/postgresql/connection');
const dotenv = require('dotenv')
var app = express();

app.set('port', process.env.PORT || 4000);

app.get('/', function (req, res, next) {
   console.log('Get Inicial')
});
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});