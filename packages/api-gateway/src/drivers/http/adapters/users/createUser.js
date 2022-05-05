const errorHandler = require('./errorHandler');

async function createUser(req, reply) {
  try {
    const {
      email,
      firstName,
      secondName,
      firstSurname,
      secondSurname,
      birthDate,
      gender,
      phoneNumber,
    } = req.body;

    req.log.info('[http-server]: Creating user with: ', {
      email,
      firstName,
      secondName,
      firstSurname,
      secondSurname,
      birthDate,
      gender,
      phoneNumber,
    });

    const result = await this.userServices.createUser({
      email,
      firstName,
      secondName,
      firstSurname,
      secondSurname,
      birthDate,
      gender,
      phoneNumber,
    });

    if (result.isBoom === true) {
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

module.exports = createUser;
