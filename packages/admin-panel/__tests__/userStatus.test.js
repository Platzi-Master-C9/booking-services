const { userStatus } = require('../src/useCases');

// test example
describe('Given an request for changing user status',()=>{

  beforeEach(() => {

  });

  test('When calling  userStatus() with valid user_id, status and reason"', () => {
    expect(userStatus(userId, status,reason)).toBe('done!!');
  });

})