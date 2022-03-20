
async function places(req, reply) {

	const { input } = req.body;

	req.log.info('[http-server]: proving places: ', { input });

	await this.places(input);

	return reply.code(200)
		.header('Content-Type', 'application/json; chartset:utf-8')
		.send({ msg: "funciona" });
}

module.exports = {
	places
}
