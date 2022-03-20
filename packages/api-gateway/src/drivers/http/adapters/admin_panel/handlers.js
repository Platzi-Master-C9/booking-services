
async function sayHello(req, reply) {
	
	const result = await this.adminPanelService.sayHello();

	return reply.code(200)
		.header('Content-Type', 'application/json; chartset:utf-8')
		.send({ result });
}

module.exports = {
	sayHello
}