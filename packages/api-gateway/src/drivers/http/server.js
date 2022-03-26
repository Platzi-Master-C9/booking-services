'use strict';

const Fastify = require('fastify');
const Autoload = require('fastify-autoload');
const path = require('path');

const fastify = Fastify({ logger: true });

fastify.register(Autoload, { dir: path.join(__dirname, 'routes')});
fastify.register(Autoload, { dir: path.join(__dirname, 'plugins')});

async function start() {


	try {
		await fastify.listen(process.env.SERVER_PORT || 3000, '0.0.0.0');
		
	} catch (error) {
		fastify.log.error(`[http-server]: Error with message ${error.message} has happened`);
		process.exit(1);
	}
}

module.exports = {
	start,
	fastify
}
