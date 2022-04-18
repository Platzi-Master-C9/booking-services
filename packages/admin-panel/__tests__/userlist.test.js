const { userList } = require('../src/useCases');

// test example
describe('Given a request for listing regular users', () => {
  test('When calling  userList.getUsers()"', () => {

    expect(userList.getUsers()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any('string'),
          fullName: expect.any('string'),
          urlImage: expect.any('string'),
          dateOfRegister: expect.any('object'),
          status: expect.any('string'),
          profile: expect.any('number'),
        })
      ])
    )

  });
});