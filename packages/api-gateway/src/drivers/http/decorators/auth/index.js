const hasPermissions = (permissions) => (req, reply, done) => {
  const userPermissions = req.user.permissions;
  for (let i = 0; i < userPermissions.length; i++) {
    const userPermission = userPermissions[i];
    if (permissions.includes(userPermission)) {
      return done();
    }
  }

  return reply.code(401).send({
    success: false,
    message: 'permission denied',
    statusCode: 403,
  });
};

const hasRole = (roles) => (req, reply, done) => {
  const userPermissions = req.user.permissions;
  for (let i = 0; i < userPermissions.length; i++) {
    const userPermission = userPermissions[i];
    if (roles.includes(userPermission)) {
      return done();
    }
  }

  return reply.code(401).send({
    success: false,
    message: 'unauthorized',
    statusCode: 401,
  });
};

module.exports = {
  hasPermissions,
  hasRole,
};
