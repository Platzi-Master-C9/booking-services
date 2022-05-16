function getInfoUserForInfoLog(data) {
  return {
    firstName: data.firstName,
    firstSurname: data.firstSurname,
  };
}

module.exports = getInfoUserForInfoLog;
