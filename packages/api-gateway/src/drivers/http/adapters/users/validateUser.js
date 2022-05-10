const errorHandler = require('./errorHandler');

async function validateUser(req, reply) {
  try {
    const data = {
      ...({ userId } = req.params),
      ...({
        firstName,
        secondName,
        firstSurname,
        secondSurname,
        birthDate,
        nationality,
        dniId,
        dniFrontImg,
        dniBackImg,
        gender,
        phoneNumber,
        emergencyNumber,
        passport,
        address: {
          country, city, state, address, zip,
        },
      } = req.body),
    };

    req.log.info('[http-server]: Validate user with: ', data);

    const result = await this.userServices.validateUser(data);

    if (result.isBoom) {
      return errorHandler(result, reply);
    }

    return reply
      .code(200)
      .header('Content-Type', 'application/json; chartset:utf-8')
      .send({ result });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

module.exports = validateUser;
