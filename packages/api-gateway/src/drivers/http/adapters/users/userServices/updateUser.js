const errorHandler = require('../errorHandler');
const { getInfoUserForInfoLog } = require('../getInfoUserForInfoLog');

async function updateUser(req, reply) {
  try {
    const data = {
      ...req.params,
      ...req.body,
    };

    req.log.info('[http-server]: Update user of: ', getInfoUserForInfoLog(data));

    const result = await this.userServices.updateUser(data);

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

module.exports = updateUser;
