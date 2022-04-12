const userStatus = Object.freeze({
  VERIFIED: 'verified',
  ACTIVE: 'active',
  DELETE: 'delete',
  BANNED: 'banned',
});

const readableStatus = Object.freeze({
  VERIFIED: 'Verificado',
  ACTIVE: 'Activo',
  DELETE: 'Eliminado',
  BANNED: 'Baneado',
});

module.exports = {
  userStatus,
  readableStatus,
};
