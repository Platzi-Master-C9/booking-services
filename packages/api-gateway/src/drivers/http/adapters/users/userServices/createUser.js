const errorHandler = require('../errorHandler');
const { getInfoUserForInfoLog } = require('../getInfoUserForInfoLog');

async function createUser(req, reply) {
  try {
    req.log.info('[http-server]: Creating user of: ', getInfoUserForInfoLog(req.body));

    const result = await this.userServices.createUser(req.body);

    if (result.isBoom) {
      return errorHandler(result, reply);
    }

    return reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ result });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

module.exports = createUser;
