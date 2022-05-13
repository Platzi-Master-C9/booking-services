async function welcomeNotifications(req, reply) {
  req.log.info('[http-server]: Welcoming from notifications module');

  return reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ message: 'Welcome from the notifications module!' });
}

module.exports = {
  welcomeNotifications,
};
