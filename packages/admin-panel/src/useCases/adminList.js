const { adminList } = require('../../mocks/adminList.mock');

const getAdmins = (profile, fullName) => {
  let fakeAdminList = adminList;

  if (profile) {
    fakeAdminList = fakeAdminList.filter((admin) => admin.profile === profile);
  }
  if (fullName) {
    fakeAdminList = fakeAdminList.filter((admin) => admin.fullName.search(fullName) >= 0);
  }

  return fakeAdminList;
};

module.exports = {
  getAdmins,
};
