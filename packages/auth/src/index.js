'use strict'

// Constants
const { texts } = require('./utils/constants')

// Services
const { greetingServices } = require('./useCases');

// Domains
// ...

module.exports = {
  runGreeting: greetingServices.getGreeting({text: texts.greetings}),
}
