// Internal dependencies
const mathAdapters = require('./math/handlers');
const geolocationAdapters = require('./geolocation/handlers');
const statusAdapters = require('./status/handlers');
const adminPanelAdapters = require('./admin_panel/handlers');
const notificationsAdapters = require('./notifications/handlers');
const placesAdapters = require('./places/handlers');
const messageAdapters = require('./messages/handlers');

module.exports = {
  mathAdapters,
  statusAdapters,
  geolocationAdapters,
  adminPanelAdapters,
  notificationsAdapters,
  placesAdapters,
  messageAdapters,
};
