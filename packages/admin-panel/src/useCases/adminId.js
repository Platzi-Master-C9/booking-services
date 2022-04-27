const othersSquad = require('../utils/fake_data');

const getAdminId = (admin_id) => {
  //the user who will use the endpoint must be authenticated,
  //the fixed value is left while the session management is integrated
  const userAutenticated = 1;

  if (userAutenticated == 0) {
    throw new Error('The user does not have an authenticated session');
  }

  // check if there is an administrator,
  // if there is, it returns an object with the data of the administrator
  const admin = othersSquad.getAdmin(admin_id);

  //validate if the admin is valid
  if (!admin) {
    throw new Error('Admin does not exist');
  }
  return admin;
};

module.exports = {
  getAdminId,
};


