const Fastify = require('fastify')({ logger: true });
const Autoload = require('fastify-autoload');
const Path = require('path');


async function start() {
    Fastify.register(Autoload, {dir: Path.join(__dirname, 'routes')});

    try {
        await Fastify.listen(process.env.SERVER_PORT || 3000);
        let { address, port } = Fastify.server.address();
        console.log(`🚀 server listening on http://${address}:${port}`);
    }
    catch (err) {
        Fastify.log.error(`[http-server]: Error with message "${err.message}" has occurred`);
        process.exit(1);
    }
}


module.exports = {
    start
};