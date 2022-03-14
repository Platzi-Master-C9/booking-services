'use strict';

const { format, createLogger } = require('winston');

const { combine, timestamp, printf } = format;

const myFormat = printf(({ message, timestamp }) => {
  return `${timestamp} ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), myFormat),
});

module.exports = logger;
