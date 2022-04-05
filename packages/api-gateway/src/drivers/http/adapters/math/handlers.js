'use strict';

async function createSum(req, reply) {

	const { inputA, inputB } = req.body;

	req.log.info('[http-server]: Creating sum with: ', { inputA, inputB });

	const result = await this.mathServices.sumOperation({ inputA, inputB });

	return reply.code(200)
		.header('Content-Type', 'application/json; chartset:utf-8')
		.send({ result });
}

module.exports = {
	createSum
}
