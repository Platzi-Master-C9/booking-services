'use strict';

const { format, createLogger, transports } = require('winston');
const { combine, timestamp, printf } = format;

/**
 * @description Create a custom message for logger
 */
const myFormat = printf(({ message, timestamp }) => {
  return `${timestamp} ${message}`;
});

/**
 * @description Create the logger
 * @param {Object} message recibe message as object { message }
 * @returns string with the timestamp and the message
 * @example
 * Logger.info({message: '[geolocation:mongodb]: Connection succesfully to server'});
 */
const logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [new transports.Console()],
});

module.exports = logger;
