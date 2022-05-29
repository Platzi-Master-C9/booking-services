jest.mock('@booking-services/shared', () => ({
  __esModule: true,
  Logger: {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  },
}));

const setMockModelData = (mockModel, data = {}) => {
  mockModel.find.mockReturnValue(data);
  mockModel.findOne.mockReturnValue(data[0]);
  mockModel.findById.mockReturnValue(data[0]);
  mockModel.countDocuments.mockReturnValue(data.length);
  mockModel.create.mockImplementation(() => ({
    ...data[0],
    toObject: () => data[0],
  }));

  return mockModel;
};

const clearModelMocks = (model) => {
  const keys = Object.keys(model);

  keys.forEach((key) => {
    model[key].mockRestore();
  });
};

/**
 * @param {unknown[]} defaultData
 * @returns {{
 *    find: jest.Mock,
 *    findOne: jest.Mock,
 *    findById: jest.Mock,
 *    countDocuments: jest.Mock,
 *    create: jest.Mock
 * }}
 */
const makeMockModel = (defaultData = []) => {
  const mockModel = {
    find: jest.fn(),
    findOne: jest.fn(),
    findById: jest.fn(),
    countDocuments: jest.fn(),
    exists: jest.fn(() => false),
    create: jest.fn(),
  };

  return setMockModelData(mockModel, defaultData);
};

module.exports = {
  clearModelMocks,
  setMockModelData,
  makeMockModel,
};
