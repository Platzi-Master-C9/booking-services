// Services
const adminPanelService = require('./useCases');

module.exports = {
  sayHello: adminPanelService.firstCase.sayHello,
};
