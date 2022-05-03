const models = require('./domains/index');

const {
    dbWriter,
    getPlaces,
    dbDeleter,
} = require('./useCases/index');

module.exports = {
    postPlace: dbWriter(models.Place),
    getPlaces: getPlaces(models.Place),
    deletePlace: dbDeleter(models.Place),
};
