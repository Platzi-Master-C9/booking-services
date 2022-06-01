const { userEdit } = require('../src/useCases');

// test example
describe('Given an request get user detail', () => {
  test('When calling userEdit.editUserInfo() with user_id, and fields to edit with information"', () => {
    expect(userEdit.editUserInfo(1, 'first_name', 'second_name', 'first_surname', 'second_surname', 'email', 'phone', 'url_image')).toBe('The user was updated');
  });

  test('When calling userEdit.editUserInfo() with invalid user_id"', () => {
    expect(() => userEdit.editUserInfo(10, 'first_name', 'second_name', 'first_surname', 'second_surname', 'email', 'phone', 'url_image')).toThrow(Error);
  });

  test('When calling userEdit.editUserInfo() with valid user_id and empty fields to edit"', () => {
    expect(() => userEdit.editUserInfo(1, '', '', '', '', '', '', '')).toThrow(Error);
  });
});
