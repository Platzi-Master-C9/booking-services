const { firstCase } = require('../src/useCases');

// test example
describe('Given an example of use Cases',()=>{

  //setup

  test('When executing firstCase.sayHello()"', () => {
    expect(firstCase.sayHello()).toBe('done!!');
  });

})
