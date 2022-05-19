const { userList } = require('../../mocks/userList.mock');

const getUsers = (status, fullName, profile, validated) => {
  let fakeUserList = userList;
  // since this endpoint is just for listing regular users, we have to filter by profile
  // in this case, profile = 3 and profile = 4 are admins and super Admins
  // if the user sent a status or a fullName, we have to make a filter
  fakeUserList = fakeUserList.filter((user) => user.profile !== 3 && user.profile !== 4);

  if (profile) {
    fakeUserList = fakeUserList.filter((user) => user.profile === profile);
  }

  if (validated) {
    fakeUserList = fakeUserList.filter((user) => user.validated === validated);
  }

  if (status) {
    fakeUserList = fakeUserList.filter((user) => user.status === status);
  }
  if (fullName) {
    fakeUserList = fakeUserList.filter((user) => user.fullName.search(fullName) >= 0);
  }

  return fakeUserList;
};

module.exports = {
  getUsers,
};
