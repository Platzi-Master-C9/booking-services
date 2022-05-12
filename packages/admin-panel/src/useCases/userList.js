const { userList } = require('../../mocks/userList.mock');

const getUsers = (status, fullName, userType, validated) => {
  let fakeUserList = userList;
  // since this endpoint is just for listing regular users, we have to filter by userType
  // in this case, userType = 3 and userType = 4 are admins and super Admins
  // if the user sent a status or a fullName, we have to make a filter
  fakeUserList = fakeUserList.filter((user) => user.userType !== 3 && user.userType !== 4);

  if (userType) {
    fakeUserList = fakeUserList.filter((user) => user.userType === userType);
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
