// Internal dependencies
const adminPanelAdapters = require('./admin-panel/handlers');
const authAdapters = require('./auth/handlers');
const geolocationAdapters = require('./geolocation/handlers');
const mathAdapters = require('./math/handlers');
const messageAdapters = require('./messages/handlers');
const notificationsAdapters = require('./notifications/handlers');
const placesAdapters = require('./places/handlers');
const statusAdapters = require('./status/handlers');
const userAdapter = require('./users/handlers');

module.exports = {
  adminPanelAdapters,
  authAdapters,
  geolocationAdapters,
  mathAdapters,
  messageAdapters,
  notificationsAdapters,
  placesAdapters,
  statusAdapters,
  userAdapter,
};
