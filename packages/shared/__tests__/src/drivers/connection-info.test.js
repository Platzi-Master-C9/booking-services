// Internal dependencies
const { setupMongoEvents } = require('../../../src/drivers/mongodb/connection-info');

describe('setupMongoEvents', () => {
  describe('given a mongoose instance', () => {
    const mongooseInstance = {
      on: jest.fn(),
      once: jest.fn(),
    };

    describe('when setupMongoEvents is called', () => {
      test('then should subscribe to events', async () => {
        setupMongoEvents(mongooseInstance);

        expect(mongooseInstance.on).toBeCalledWith('error', expect.any(Function));
        expect(mongooseInstance.once).toBeCalledWith('open', expect.any(Function));
        expect(mongooseInstance.once).toBeCalledWith('connected', expect.any(Function));
        expect(mongooseInstance.once).toBeCalledWith('disconnected', expect.any(Function));
      });
    });
  });
});
