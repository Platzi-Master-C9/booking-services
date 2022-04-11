async function sayHello(req, reply) {
  const result = await this.adminPanelService.sayHello();
  return reply.code(200)
    .header('Content-Type', 'application/json; chartset:utf-8')
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
      .header('Content-Type', 'application/json; chartset:utf-8')
      .send({result});
  } catch (e) {
    return reply.code(400).send({
      message: e.message,
    });
  }
}
module.exports = {
  sayHello,
  changeUserStatus,
};
