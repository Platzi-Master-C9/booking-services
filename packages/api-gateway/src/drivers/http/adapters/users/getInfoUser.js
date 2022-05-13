function getInfoUser(data) {
  return {
    firstName: data.firstName,
    firstSurname: data.firstSurname,
  };
}

module.exports = getInfoUser;
