const othersSquad = require('../utils/fake_data');

const getAdminId = (adminId) => {
  // the user who will use the endpoint must be authenticated,
  // the fixed value is left while the session management is integrated
  const userAutenticated = 1;

  if (userAutenticated === 0) {
    throw new Error('The user does not have an authenticated session');
  }

  // check if there is an administrator,
  // if there is, it returns an object with the data of the administrator
  const admin = othersSquad.getAdmin(adminId);

  // validate if the admin is valid
  if (!admin || admin.profile !== 3 || admin.profile !== 4) {
    throw new Error('Admin does not exist');
  }
  return admin;
};

module.exports = {
  getAdminId,
};
