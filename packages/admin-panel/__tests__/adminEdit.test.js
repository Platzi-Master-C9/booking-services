const { adminEdit } = require('../src/useCases');

// test example
describe('Given an request get admin detail', () => {
  test('When calling adminEdit.editAdminInfo() with user_id, and fields to edit with information."', () => {
    expect(adminEdit.editAdminInfo(1, 'first_name', 'second_name', 'first_surname', 'second_surname', '3')).toBe('The admin was updated');
  });

  test('When calling adminEdit.editAdminInfo() with valid admin_id and empty fields to edit"', () => {
    expect(() => adminEdit.editAdminInfo(1, '', '', '', '', '', '', '')).toThrow(Error);
  });

  test('When calling adminEdit.editAdminInfo() with invalid profile"', () => {
    expect(() => adminEdit.editAdminInfo(10, 'first_name', 'second_name', 'first_surname', 'second_surname', '1')).toThrow(Error);
  });

  test('When calling adminEdit.editAdminInfo() with valid admin_id and empty fields to edit"', () => {
    expect(() => adminEdit.editAdminInfo(1, '', '', '', '', '', '', '')).toThrow(Error);
  });
});
