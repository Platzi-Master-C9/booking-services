const { faker } = require('@faker-js/faker');
const { createUser, validateUser, updateUser } = require('../src/index');

const userFake = {
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  secondName: faker.name.firstName(),
  firstSurname: faker.name.lastName(),
  secondSurname: faker.name.lastName(),
  birthDate: faker.date.between('1900-01-01', '2000-01-01'),
  gender: faker.name.gender(true),
  phoneNumber: faker.phone.phoneNumber('##########'),
};
const validateFake = {
  userId: faker.datatype.number(),
  firstName: faker.name.firstName(),
  secondName: faker.name.firstName(),
  firstSurname: faker.name.lastName(),
  secondSurname: faker.name.lastName(),
  birthDate: faker.date.between('1900-01-01', '2000-01-01'),
  nationality: faker.address.countryCode('alpha-3'),
  dniId: faker.phone.phoneNumber('########'),
  dniFrontImg: faker.image.avatar(),
  dniBackImg: faker.image.abstract(),
  gender: faker.name.gender(true),
  phoneNumber: faker.phone.phoneNumber('##########'),
  emergencyNumber: faker.phone.phoneNumber('##########'),
  passport: faker.phone.phoneNumber('########'),
  address: {
    country: faker.address.countryCode('alpha-3'),
    city: faker.address.city(),
    state: faker.address.state(),
    address: faker.address.streetAddress(),
    zip: faker.address.zipCode(),
  },
};
const updateFake = {
  userId: faker.datatype.number(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  firstName: faker.name.firstName(),
  secondName: faker.name.firstName(),
  firstSurname: faker.name.lastName(),
  secondSurname: faker.name.lastName(),
  birthDate: faker.date.between('1900-01-01', '2000-01-01'),
  nationality: faker.address.countryCode('alpha-3'),
  dniId: faker.phone.phoneNumber('########'),
  dniFrontImg: faker.image.avatar(),
  dniBackImg: faker.image.abstract(),
  gender: faker.name.gender(true),
  phoneNumber: faker.phone.phoneNumber('##########'),
  emergencyNumber: faker.phone.phoneNumber('##########'),
  passport: faker.phone.phoneNumber('########'),
  address: {
    country: faker.address.countryCode('alpha-3'),
    city: faker.address.city(),
    state: faker.address.state(),
    address: faker.address.streetAddress(),
    zip: faker.address.zipCode(),
  },
};
function validatorEmptyStringHandler(func, value, Fake) {
  const data = { ...Fake };
  data[value] = '';
  expect(func(data).isBoom).toBe(true);
  expect(func(data).output.payload.message).toBe(
    `"${value}" is not allowed to be empty`,
  );
}
function validatorRequireHandler(func, value, Fake) {
  const data = { ...Fake };
  delete data[value];
  expect(func(data).isBoom).toBe(true);
  expect(func(data).output.payload.message).toBe(`"${value}" is required`);
}

function validatorFormatStringHandler(func, value, Fake) {
  const data = { ...Fake };
  data[value] = 'string';
  expect(func(data).isBoom).toBe(true);
}
describe('prove use of the create user service', () => {
  test('working properly create user ', () => {
    expect(createUser(userFake)).toBe(userFake);
  });

  test('data cannot be empty', () => {
    const string = [
      'email',
      'firstName',
      'secondName',
      'firstSurname',
      'secondSurname',
      'phoneNumber',
    ];
    string.forEach((element) => {
      validatorEmptyStringHandler(createUser, element, userFake);
    });
  });
  test('data required', () => {
    const string = [
      'email',
      'firstName',
      'firstSurname',
      'birthDate',
      'gender',
      'phoneNumber',
    ];
    string.forEach((element) => {
      validatorRequireHandler(createUser, element, userFake);
    });
  });
  test('data with correct format', () => {
    const string = ['email', 'birthDate', 'gender', 'phoneNumber'];
    string.forEach((element) => {
      validatorFormatStringHandler(createUser, element);
    });
  });
});
describe('Prove use of the validate user service', () => {
  test('should working properly validate user', () => {
    expect(validateUser(validateFake)).toBe(validateFake);
  });
  test('data cannot be empty', () => {
    const string = [
      'firstName',
      'secondName',
      'firstSurname',
      'secondSurname',
      'nationality',
      'dniId',
      'dniBackImg',
      'phoneNumber',
      'emergencyNumber',
      'passport',
    ];
    string.forEach((element) => {
      validatorEmptyStringHandler(validateUser, element, validateFake);
    });
  });
  test('data required', () => {
    const string = [
      'userId',
      'firstName',
      'firstSurname',
      'birthDate',
      'nationality',
      'dniId',
      'dniFrontImg',
      'dniBackImg',
      'gender',
      'address',
    ];
    string.forEach((element) => {
      validatorRequireHandler(validateUser, element, validateFake);
    });
  });
  test('should data with correct format', () => {
    const string = [
      'userId',
      'birthDate',
      'nationality',
      'dniBackImg',
      'dniFrontImg',
      'gender',
    ];
    string.forEach((element) => {
      validatorFormatStringHandler(validateUser, element, validateFake);
    });
  });
});
describe('Prove use of the update user service', () => {
  test('should working properly validate user', () => {
    expect(updateUser(updateFake)).toBe(updateFake);
  });
  test('data cannot be empty', () => {
    const string = [
      'email',
      'avatar',
      'firstName',
      'secondName',
      'firstSurname',
      'secondSurname',
      'nationality',
      'dniId',
      'dniBackImg',
      'phoneNumber',
      'emergencyNumber',
      'passport',
    ];
    string.forEach((element) => {
      validatorEmptyStringHandler(updateUser, element, updateFake);
    });
  });
  test('data required', () => {
    const string = ['userId'];
    for (let i = 0; i < string.length; i += 1) {
      validatorRequireHandler(updateUser, string[i], updateFake);
    }
  });
  test('should data with correct format', () => {
    const string = [
      'userId',
      'birthDate',
      'nationality',
      'dniBackImg',
      'dniFrontImg',
      'gender',
    ];
    string.forEach((element) => {
      validatorFormatStringHandler(updateUser, element, updateFake);
    });
  });
});
