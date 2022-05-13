const { adminList } = require('../../mocks/adminList.mock');

const getAdmins = (profile, fullName) => {
  let fakeAdminList = adminList;

  fakeAdminList = fakeAdminList.filter((user) => user.userType === 3 || user.userType === 4);

  if (profile) {
    fakeAdminList = fakeAdminList.filter((admin) => admin.userType === profile);
  }
  if (fullName) {
    fakeAdminList = fakeAdminList.filter((admin) => admin.fullName.search(fullName) >= 0);
  }

  return fakeAdminList;
};

module.exports = {
  getAdmins,
};
