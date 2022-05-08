const { userList } = require('../src/useCases');

// test example
describe('Given a request for listing regular users', () => {
  test('When calling  userList.getUsers()"', () => {
    expect(userList.getUsers()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          fullName: expect.any(String),
          urlImage: expect.any(String),
          dateOfRegister: expect.any(Object),
          status: expect.any(String),
          profile: expect.any(Number),
        }),
      ]),
    );
  });
});
