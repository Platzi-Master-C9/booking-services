'use strict';

const mathAdapters = require('./math/handlers');
const statusAdapters = require('./status/handlers');
const adminPanelAdapters = require('./admin_panel/handlers');
const authAdapters = require('./auth/handlers');
const notificationsAdapters = require('./notifications/handlers');

module.exports = {
	mathAdapters,
	statusAdapters,
	adminPanelAdapters,
	authAdapters,
  notificationsAdapters,
}
