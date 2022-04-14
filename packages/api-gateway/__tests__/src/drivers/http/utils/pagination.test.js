// External dependencies
const { faker } = require('@faker-js/faker');

// Internal dependencies
const { makePagination } = require('../../../../../src/drivers/http/utils/pagination');

describe('makePagination', () => {
  describe('given a total of 2 items', () => {
    const items = [
      {
        _id: faker.datatype.uuid(),
      },
      {
        _id: faker.datatype.uuid(),
      },
    ];

    describe('when calling with 1 as page and 2 as pages', () => {
      const page = 1;
      const pages = 2;
      const paginatedResult = makePagination(page, pages, items);

      test('then should return the pagination data structure', () => {
        expect(paginatedResult).toEqual({
          page,
          pages,
          rows: items,
        });
      });
    });
  });
});
