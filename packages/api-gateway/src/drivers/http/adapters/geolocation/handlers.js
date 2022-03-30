"use strict";

function errorHandler(error, reply) {
  if (error.isBoom) {
    return reply.send(error.output.payload);
  }

  return reply.code(500).send({ error: error.message, stack: error.stack });
}

async function sayHello(req, reply) {
  try {
    const result = await this.geolocationServices.createPlace(req.body);
    return reply
      .code(200)
      .header("Content-Type", "application/json; chartset:utf-8")
      .send({ result });
  } catch (error) {
    errorHandler(error, reply);
  }
}

module.exports = {
  sayHello,
};
