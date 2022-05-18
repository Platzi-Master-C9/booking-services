const { faker } = require('@faker-js/faker');
const { adminCreate } = require('../src/useCases');

const adminFake = {
  first_name: faker.name.firstName(),
  second_name: faker.name.middleName(),
  first_surname: faker.name.lastName(),
  second_surname: faker.name.lastName(),
  profile: faker.datatype.number({ min: 1, max: 2 }),
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
  test('When calling adminCreate.createAdmin() with information', () => {
    expect(adminCreate(adminFake)).toBe(adminFake);
  });

  test('data cannot be empty', () => {
    const string = [
      'first_name',
      'second_name',
      'first_surname',
      'second_surname',
      'profile',
    ];
    string.forEach((element) => {
      validatorEmptyStringHandler(adminCreate, element, adminFake);
    });
  });
  test('data required', () => {
    const string = [
      'first_name',
      'first_surname',
      'profile',
    ];
    string.forEach((element) => {
      validatorRequireHandler(adminCreate, element, adminFake);
    });
  });
});
