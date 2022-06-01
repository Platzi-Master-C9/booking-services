const errorHandler = require('../errorHandler');
const { getInfoUserForInfoDeleteLog } = require('../getInfoUserForInfoLog');

async function getBookmark(req, reply) {
  try {
    req.log.info('[http-server]: Geting bookmark of: ', getInfoUserForInfoDeleteLog(req.params));

    const result = await this.userServices.getBookmark(req.params);

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

module.exports = getBookmark;
