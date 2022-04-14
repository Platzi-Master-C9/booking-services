// External dependencies
const MockModel = require('jest-mongoose-mock');

// Internal dependencies
const { mathServices } = require('../../../src/useCases');

describe('use-case: sumOperation', () => {
  const mockMathModel = new MockModel();

  const sumOperation = mathServices.sumOperation(mockMathModel);

  describe('given 1 as input A and 2 as input B', () => {
    const inputA = 1;
    const inputB = 2;

    describe('when sumOperation is called', () => {
      let result;

      beforeEach(() => {
        result = sumOperation({ inputA, inputB });
      });

      test('then should return 3', () => {
        expect(result).toBe(3);
      });

      test('and should store the operation in database', () => {
        expect(mockMathModel.create.mock.calls.length).toBe(1);
      });
    });
  });

  describe('given "a" as input A and "b" as input B', () => {
    const inputA = 'a';
    const inputB = 'b';

    describe('when sumOperation is called', () => {
      test('then should return an error', () => {
        expect(() => sumOperation({ inputA, inputB })).toThrow('Inputs must be numbers');
      })
    });
  });
});
