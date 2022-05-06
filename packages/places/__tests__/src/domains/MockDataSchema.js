const { faker } = require('@faker-js/faker');

const PlaceModelMock = {
    tableName: 'places',
    findAll: jest.fn(() => {
        const places = [];
        for (let i = 0; i < 10; i++) {
            places.push({
                id: faker.datatype.number({ min: 1, max: 100 }),
                place_name: faker.name.firstName(),
                price_per_night_usd: faker.finance.amount(1, 1000),
                type: 'casa',
                host_id: faker.datatype.number({ min: 1, max: 100 }),
                rating: null,
                perks: [{
                    perk: faker.lorem.sentence(4),
                }],
                spaces: [{
                    space: faker.lorem.word(6),
                }],
                images: [{
                    url: faker.image.city(),
                }],
                rules: [{
                    rule: faker.lorem.sentence(5),
                }],
                toJSON: jest.fn(),
            });
        }
        return places;
    }),
    create: jest.fn((newRowInfo) => {
        const keys = Object.keys(newRowInfo);
        if (keys.length !== 4) {
            throw new Error('Incomplete data');
        }
        const savedData = {
            id: faker.datatype.number({ min: 1, max: 100 }),
            is_active: true,
            rating: null,
            ...newRowInfo,
        };
        return savedData;
    }),
    update: jest.fn((newInfo, query) => {
        const { where: { id } } = query;
        if (typeof id !== 'number' || id >= 1000) {
            return [0];
        }
        return [1];
    }),
};

module.exports = {
    PlaceModelMock,
};
