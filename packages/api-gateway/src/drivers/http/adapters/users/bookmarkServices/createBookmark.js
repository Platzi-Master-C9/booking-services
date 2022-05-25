const errorHandler = require('../errorHandler');
const { getInfoUserForInfoDeleteLog } = require('../getInfoUserForInfoLog');

async function createBookmark(req, reply) {
  try {
    const data = {
      ...req.params,
      ...req.body,
    };

    req.log.info('[http-server]: Creating bookmark of: ', getInfoUserForInfoDeleteLog(data));

    const result = await this.userServices.createBookmark(data);

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

module.exports = createBookmark;
