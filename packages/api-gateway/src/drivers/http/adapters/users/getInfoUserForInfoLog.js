function getInfoUserForInfoLog(data) {
  return {
    firstName: data.firstName,
    firstSurname: data.firstSurname,
  };
}

function getInfoUserForInfoDeleteLog(data) {
  return {
    userId: data.userId,
  };
}

module.exports = { getInfoUserForInfoLog, getInfoUserForInfoDeleteLog };
