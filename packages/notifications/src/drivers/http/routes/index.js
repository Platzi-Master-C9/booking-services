function getTemplate(request, reply) {
    reply.code(200).send('Server running successfully');
}

async function exampleRouter(fastify) {
	await fastify.get('/', {}, getTemplate);
}

module.exports = exampleRouter;