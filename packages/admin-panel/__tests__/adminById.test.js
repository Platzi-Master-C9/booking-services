const { adminId } = require('../src/useCases');



describe('Given an request for changing user status', () => {
  test('When calling  adminId.getAdminId() with invalid admin_id"', () => {
    expect(() => adminId.getAdminId(10)).toThrow(Error);
  });

  test('When calling  adminId.getAdminId()"', () => {
    expect(adminId.getAdminId(1)).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          fullName: expect.any(String),
          urlImage: expect.any(String),
          profile: expect.any(Number),
        }),
    );
  });
});
