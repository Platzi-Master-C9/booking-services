'use strict'

// Services
const adminPanelService = require('./useCases')

module.exports = {
    sayHello: adminPanelService.sayHello
}