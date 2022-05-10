const errorHandler = require('./errorHandler');

async function updateUser(req, reply) {
  try {
    const {
      email,
      avatar,
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
    } = req.body;

    const data = {
      ...({ userId } = req.params),
      email,
      avatar,
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
    };

    req.log.info('[http-server]: Update user with: ', data);

    const result = await this.userServices.updateUser(data);

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

module.exports = updateUser;
