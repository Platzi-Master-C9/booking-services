const othersSquad = require('../utils/fake_data');

const editAdminInfo = (
  adminId,
  firstName,
  secondName,
  firstSurname,
  secondSurname,
  profile,
) => {
  // verify if user exists
  const admin = othersSquad.getUser(adminId);
  if (!admin) {
    throw new Error('Admin does not exist');
  }

  if (firstName === '' && secondName === '' && firstSurname === '' && secondSurname === '' && profile === '') {
    throw new Error('You have to fill one of the fields to edit');
  }

  if (profile !== '3' && profile !== '4') {
    throw new Error('The profile is not valid');
  } else {
    admin.profile = profile;
  }

  if (typeof firstName !== 'string') {
    throw new Error('First name must be a string');
  } else if (firstName !== '') {
    admin.firstName = firstName;
  }
  if (typeof secondName !== 'string') {
    throw new Error('Second name must be a string');
  } else if (secondName !== '') {
    admin.secondName = secondName;
  }
  if (typeof firstSurname !== 'string') {
    throw new Error('First surname must be a string');
  } else if (firstSurname !== '') {
    admin.firstSurname = firstSurname;
  }
  if (typeof secondSurname !== 'string') {
    throw new Error('Second surname must be a string');
  } else if (secondSurname !== '') {
    admin.secondSurname = secondSurname;
  }
  if (typeof profile !== 'string') {
    throw new Error('Profile must be a string');
  } else if (profile !== '') {
    admin.profile = profile;
  }

  return 'The admin was updated';
};

module.exports = {
  editAdminInfo,
};
