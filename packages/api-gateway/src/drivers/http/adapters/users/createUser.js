const errorHandler = require('./errorHandler');

async function createUser(req, reply) {
  try {
    const data = ({
      email,
      firstName,
      secondName,
      firstSurname,
      secondSurname,
      birthDate,
      gender,
      phoneNumber,
    } = req.body);

    req.log.info('[http-server]: Creating user with: ', data);

    const result = await this.userServices.createUser(data);

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

module.exports = createUser;
