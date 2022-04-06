const { userStatus } = require('../src/useCases');

// test example
describe('Given an request for changing user status',()=>{

  test('When executing firstCase.sayHello()"', () => {
    expect(userStatus(userId, status,reason)).toBe('done!!');
  });

})