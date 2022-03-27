'use strict';

const mathAdapters = require('./math/handlers');
const statusAdapters = require('./status/handlers');
const adminPanelAdapters = require('./admin_panel/handlers');

module.exports = {
	mathAdapters,
	statusAdapters,
	adminPanelAdapters,
}
