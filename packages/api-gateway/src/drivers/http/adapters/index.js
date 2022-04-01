'use strict';

const mathAdapters = require('./math/handlers');
const statusAdapters = require('./status/handlers');
const adminPanelAdapters = require('./admin_panel/handlers');
const notificationsAdapters = require('./notifications/handlers');
const placesAdapters = require('./places/handlers')

module.exports = {
	mathAdapters,
	statusAdapters,
	adminPanelAdapters,
    notificationsAdapters,
    placesAdapters
}
