async function getGreeting(req, reply) {
<<<<<<< HEAD
=======

>>>>>>> 99b7a1e4f7bfcb4e8fc930921d7022907b27cd1c
  const result = await this.authService.getGreeting;

  return reply.code(200)
    .header('Content-Type', 'application/json; chartset:utf-8')
    .send({ result });
}

async function private(req, reply) {
  const result = req.user;

  return reply.code(200)
    .header('Content-Type', 'application/json; chartset:utf-8')
    .send({ result });
}

module.exports = {
  getGreeting,
<<<<<<< HEAD
};
=======
  private,
}
>>>>>>> 99b7a1e4f7bfcb4e8fc930921d7022907b27cd1c
