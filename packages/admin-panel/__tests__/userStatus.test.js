const { userStatus } = require('../src/useCases');

// test example
describe('Given an request for changing user status',()=>{

  beforeEach(() => {

  });

  test('When calling  userStatus.changeUserStatus() with valid user_id, status and reason"', () => {
    expect(userStatus.changeUserStatus(1, "BANNED","'cause I'm mean")).toBe('ok');
  });

  test('When calling  userStatus.changeUserStatus() with invalid user_id"', () => {
    expect(() => userStatus.changeUserStatus(10, "BANNED","'cause I'm mean")).toThrow(Error);
  });

  test('When calling  userStatus.changeUserStatus() with invalid status"', () => {
    expect(() => userStatus.changeUserStatus(10, "THIS_STATUS_DOES_NOT_EXIST","'cause I'm mean")).toThrow(Error);
  });

  test('When calling  userStatus.changeUserStatus() with invalid reason data type"', () => {
    expect(() => userStatus.changeUserStatus(10, "BANNED",1)).toThrow(Error);
  });

})