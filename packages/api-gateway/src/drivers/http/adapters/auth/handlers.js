async function getGreeting(req, reply) {
  const result = await this.authService.getGreeting;

  return reply.code(200)
    .header('Content-Type', 'application/json; chartset:utf-8')
    .send({ result });
}

async function getPrivate(req, reply) {
  const result = req.user;

  return reply.code(200)
    .header('Content-Type', 'application/json; chartset:utf-8')
    .send({ result });
}

module.exports = {
  getGreeting,
  getPrivate,
};
