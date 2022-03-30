'use strict'

// Constants
const { texts } = require('./utils/constants')

// Services
const { greetingServices } = require('./useCases');

// Domains
// ...

module.exports = {
  getGreeting: greetingServices.getGreeting({text: texts.greetings}),
}
