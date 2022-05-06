const { adminList } = require('../src/useCases');

// test example
describe('Given a request for listing regular admin', () => {
  test('When calling  adminList.getAdmins()"', () => {
    expect(adminList.getAdmins()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          fullName: expect.any(String),
          urlImage: expect.any(String),
          profile: expect.any(Number),
        }),
      ]),
    );
  });
});
