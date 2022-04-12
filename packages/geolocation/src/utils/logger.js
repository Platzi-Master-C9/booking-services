'use strict';

const { format, createLogger, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Create a custom message for logger
const myFormat = printf(({ message, timestamp }) => {
  return `${timestamp} ${message}`;
});

// Create the logger
const logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [new transports.Console()],
});

module.exports = logger;
