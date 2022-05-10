const hasPermissions = (permissions) => (req, reply, done) => {
  const userPermissions = req.user.permissions;
  for (let i = 0; i < userPermissions.length; i++) {
    const userPermission = userPermissions[i];
    if (permissions.includes(userPermission)) {
      return done();
    }
  }

  return reply.code(403).send({
    message: 'permission denied',
    statusCode: 403,
  });
};

const hasRole = (roles, ignore = false) => (req, reply, done) => {
  if (ignore) return done();

  const userPermissions = req.user.permissions;
  for (let i = 0; i < userPermissions.length; i++) {
    const userPermission = userPermissions[i];
    if (roles.includes(userPermission)) {
      return done();
    }
  }

  return reply.code(401).send({
    message: 'unauthorized',
    statusCode: 401,
  });
};

module.exports = {
  hasPermissions,
  hasRole,
};
