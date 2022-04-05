const { changeUserStatus } = require('../src/userStatus');

// test example
describe('Given an request for changing user status',()=>{

  test('When executing firstCase.sayHello()"', () => {
    expect(changeUserStatus.sayHello()).toBe('done!!');
  });

})