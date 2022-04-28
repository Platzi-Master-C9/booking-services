const { userList } = require('../../mocks/userList.mock');

const getUserDetail = (userId) => {
  let fakeUserList = userList;
  // since this endpoint is just for listing regular users, we have to filter by profile
  // in this case, profile = 2 (means regular user, not admin)
  // if the user sent a status or a fullName, we have to make a filter
  fakeUserList = fakeUserList.filter((user) => user.id === userId);

  if (fakeUserList.length === 0) {
    throw new Error('Not Found');
  }

  return fakeUserList[0];
};

module.exports = {
  getUserDetail,
};
