jest.mock('winston', () => ({
    createLogger: () => ({
        info: jest.fn(),
        error: jest.fn(),
        warn: jest.fn(),
        debug: jest.fn(),
    }),
    transports: {
        Console: jest.fn(),
    },
    format: {
        json: jest.fn(),
    },
}));
