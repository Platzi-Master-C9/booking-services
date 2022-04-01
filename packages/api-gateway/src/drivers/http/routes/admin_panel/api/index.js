'use strict';

const { adminPanelAdapters } = require('../../../adapters');
//const schema = require('./schema');

async function adminPanelRouter(fastify) {

	await fastify.get('/',adminPanelAdapters.sayHello);
}

module.exports = adminPanelRouter;