const errorHandler = require('../errorHandler');
const { getInfoUserForInfoLog } = require('../getInfoUserForInfoLog');

async function validateUser(req, reply) {
  try {
    const data = {
      ...req.params,
      ...req.body,
    };

    req.log.info('[http-server]: Validate user of: ', getInfoUserForInfoLog(data));

    const result = await this.userServices.validateUser(data);

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

module.exports = validateUser;
