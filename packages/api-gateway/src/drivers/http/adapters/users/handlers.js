function errorHandler(error, reply) {
  if (error.isBoom) {
    return reply.code(error.output.statusCode).send(error.output.payload);
  }

  return reply.code(500).send({ error: error.message, stack: error.stack });
}

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

    req.log.info("[http-server]: Creating user with: ", {
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
      return errorHandler(result, reply)
    }

    return reply
      .code(200)
      .header("Content-Type", "application/json; chartset:utf-8")
      .send({ result });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

async function validateUser(req, reply) {
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

  req.log.info("[http-server]: Creating user with: ", {
    email,
    firstName,
    secondName,
    firstSurname,
    secondSurname,
    birthDate,
    gender,
    phoneNumber,
  });

  const result = await this.userServices.validateUser({
    email,
    firstName,
    secondName,
    firstSurname,
    secondSurname,
    birthDate,
    gender,
    phoneNumber,
  });

  return reply
    .code(200)
    .header("Content-Type", "application/json; chartset:utf-8")
    .send({ result });
}

module.exports = {
  createUser,
  validateUser
};
