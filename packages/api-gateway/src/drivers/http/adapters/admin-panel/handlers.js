const errorHandler = require('./errorHandler');

async function sayHello(req, reply) {
  const result = await this.adminPanelService.sayHello();
  return reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ result });
}

async function changeUserStatus(req, reply) {
  // TODO: this is not the place for try/catch
  try {
    const result = await this.adminPanelService.changeUserStatus(
      req.params.user_id,
      req.body.status,
      req.body.reason,
    );
    return reply.code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ result });
  } catch (e) {
    return reply.code(400).send({
      message: e.message,
    });
  }
}

async function getUsers(req, reply) {
  const result = await this.adminPanelService.getUsers(
    req.query.status,
    req.query.fullName,
    req.query.userType,
    req.query.validated,
  );

  return reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ result });
}

async function getUserDetail(req, reply) {
  try {
    const result = await this.adminPanelService.getUserDetail(req.params.user_id);
    return reply.code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ result });
  } catch (e) {
    return reply.code(404).send({
      message: e.message,
    });
  }
}

async function getAdminId(req, reply) {
  // TODO: this is not the place for try/catch
  try {
    const result = await this.adminPanelService.getAdminId(
      req.params.admin_id,
    );
    return reply.code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ result });
  } catch (e) {
    return reply.code(400).send({
      message: e.message,
    });
  }
}

async function getAdmins(req, reply) {
  const result = await this.adminPanelService.getAdmins(
    req.query.profile,
    req.query.full_name,
  );
  return reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ result });
}

async function listPlaces(req, reply) {
  const result = await this.adminPanelService.listPlaces(
    req.query.status,
    req.query.placeName,
    req.query.hostName,
  );

  return reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ result });
}

async function editUserInfo(req, reply) {
  try {
    const result = await this.adminPanelService.editUserInfo(
      req.params.user_id,
      req.body.first_name,
      req.body.second_name,
      req.body.first_surname,
      req.body.second_surname,
      req.body.email,
      req.body.phone,
      req.body.url_image,
    );
    return reply.code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ result });
  } catch (e) {
    return reply.code(400).send({
      message: e.message,
    });
  }
}

async function listBookings(req, reply) {
  const result = await this.adminPanelService.listBookings(
    req.query.dateOfBook,
    req.query.status,
    req.query.placeName,
    req.query.userName,
  );

  return reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ result });
}

//const getInfoUser = require('./getInfoUser');

async function createAdmin(req, reply) {
  try {

    const result = await this.adminPanelService.createAdmin(req.body);

    if (result.isBoom) {
      return errorHandler(result, reply);
    }

    return reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ result });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

module.exports = {
  sayHello,
  changeUserStatus,
  getUsers,
  getUserDetail,
  getAdminId,
  getAdmins,
  listPlaces,
  editUserInfo,
  listBookings,
  createAdmin,
};
