const { firstCase } = require('../src/useCases');

// test example
test('calling firstCase.sayHello() expected to be "done!!"', () => {
  expect(firstCase.sayHello()).toBe('done!!');
});
