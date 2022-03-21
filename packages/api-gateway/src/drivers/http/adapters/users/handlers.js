async function createUser(req, reply) {

	const { email,
    firstName,
    secondName,
    firstSurname,
    secondSurname,
    birthDate,
    gender,
    phoneNumber } = req.body;

	req.log.info('[http-server]: Creating user with: ', { email,
    firstName,
    secondName,
    firstSurname,
    secondSurname,
    birthDate,
    gender,
    phoneNumber });

	const result = await this.userServices.createUser({ email,
        firstName,
        secondName,
        firstSurname,
        secondSurname,
        birthDate,
        gender,
        phoneNumber });

	return reply.code(200)
		.header('Content-Type', 'application/json; chartset:utf-8')
		.send({ result });
}

module.exports = {
	createUser
}