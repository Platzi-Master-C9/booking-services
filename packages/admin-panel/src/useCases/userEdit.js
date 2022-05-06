const othersSquad = require('../utils/fake_data');

const editUserInfo = (
  userId,
  firstName,
  secondName,
  firstSurname,
  secondSurname,
  email,
  phone,
  urlImage,
) => {
  // verify if user exists
  const user = othersSquad.getUser(userId);
  if (!user) {
    throw new Error('User does not exist');
  }

  if (firstName === '' && secondName === '' && firstSurname === '' && secondSurname === '' && email === '' && urlImage === '') {
    throw new Error('You have to fill one of the fields to edit');
  }

  if (typeof firstName !== 'string') {
    throw new Error('First name must be a string');
  } else if (firstName !== '') {
    user.firstName = firstName;
  }
  if (typeof secondName !== 'string') {
    throw new Error('Second name must be a string');
  } else if (secondName !== '') {
    user.secondName = secondName;
  }
  if (typeof firstSurname !== 'string') {
    throw new Error('First surname must be a string');
  } else if (firstSurname !== '') {
    user.firstSurname = firstSurname;
  }
  if (typeof secondSurname !== 'string') {
    throw new Error('Second surname must be a string');
  } else if (secondSurname !== '') {
    user.secondSurname = secondSurname;
  }
  if (typeof email !== 'string') {
    throw new Error('Email must be a string');
  } else if (email !== '') {
    user.email = email;
  }
  if (typeof phone !== 'string') {
    throw new Error('Phone must be a string');
  } else if (phone !== '') {
    user.phone = phone;
  }
  if (typeof urlImage !== 'string') {
    throw new Error('Url must be a string');
  } else if (urlImage !== '') {
    user.urlImage = urlImage;
  }

  return 'The user was updated';
};

module.exports = {
  editUserInfo,
};
