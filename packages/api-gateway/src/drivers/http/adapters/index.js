// Internal dependencies
const mathAdapters = require('./math/handlers');
const geolocationAdapters = require('./geolocation/handlers');
const statusAdapters = require('./status/handlers');
const adminPanelAdapters = require('./admin-panel/handlers');
const authAdapters = require('./auth/handlers');
const notificationsAdapters = require('./notifications/handlers');
const placesAdapters = require('./places/handlers');
const messageAdapters = require('./messages/handlers');
const userAdapter = require('./users/handlers');

module.exports = {
  mathAdapters,
  statusAdapters,
  geolocationAdapters,
  adminPanelAdapters,
  authAdapters,
  notificationsAdapters,
  placesAdapters,
  messageAdapters,
  userAdapter,
};
