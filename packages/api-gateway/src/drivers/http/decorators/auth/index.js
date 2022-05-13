const hasPermissions = (endpointPermissions) => (req, reply, done) => {
  const userPermissions = req.user.permissions;
  for (let i = 0; i < userPermissions.length; i++) {
    const userPermission = userPermissions[i];
    if (endpointPermissions.includes(userPermission)) {
      return done();
    }
  }

  return reply.code(403).send({
    message: 'permission denied',
    statusCode: 403,
  });
};

const hasRole = (endpointRoles) => (req, reply, done) => {
  const userRoles = req.user.permissions;
  for (let i = 0; i < userRoles.length; i++) {
    const userRole = userRoles[i];
    if (endpointRoles.includes(userRole)) {
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
