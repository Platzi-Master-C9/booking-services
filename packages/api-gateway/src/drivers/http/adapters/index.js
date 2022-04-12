const mathAdapters = require('./math/handlers');
const statusAdapters = require('./status/handlers');
const geolocationAdapters = require('./geolocation/handlers');
const adminPanelAdapters = require('./admin_panel/handlers');
const authAdapters = require('./auth/handlers');
const notificationsAdapters = require('./notifications/handlers');
const placesAdapters = require('./places/handlers');

module.exports = {
  mathAdapters,
  statusAdapters,
  geolocationAdapters,
  adminPanelAdapters,
  authAdapters,
  notificationsAdapters,
  placesAdapters,
};
