const { userDetail } = require('../src/useCases');

// test example
describe('Given an request for changing user status', () => {
  test('When calling  userStatus.getUserDetail() with valid user_id"', () => {
    expect(userDetail.getUserDetail(1)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        fullName: expect.any(String),
        urlImage: expect.any(String),
        dateOfRegister: expect.any(Object),
        status: expect.any(String),
        profile: expect.any(Number),
      }),
    );
  });

  test('When calling  userStatus.getUserDetail() with invalid user_id"', () => {
    expect(() => userDetail.getUserDetail(10)).toThrow(Error);
  });
});
