const { faker } = require('@faker-js/faker');
const { createAdmin } = require('../src/index');

const adminFake = {
  firstName: faker.name.firstName(),
  secondName: faker.name.middleName(),
  firstSurname: faker.name.lastName(),
  secondSurname: faker.name.lastName(),
  profile: faker.datatype.number({ min: 3, max: 4 }).toString(),
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

describe('Given an admin create request', () => {
  test('When calling createAdmin() with information', () => {
    expect(createAdmin(adminFake)).toBe(adminFake);
  });

  test('data cannot be empty', () => {
    const string = [
      'firstName',
      'secondName',
      'firstSurname',
      'secondSurname',
      'profile',
    ];
    string.forEach((element) => {
      validatorEmptyStringHandler(createAdmin, element, adminFake);
    });
  });
  test('data required', () => {
    const string = [
      'firstName',
      'firstSurname',
      'profile',
    ];
    string.forEach((element) => {
      validatorRequireHandler(createAdmin, element, adminFake);
    });
  });
});
