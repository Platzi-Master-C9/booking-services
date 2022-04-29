const models = require('./domains/index');

const {
    dbWriter,
    getPlaces
} = require('./useCases/index');

module.exports = {
    postPlace: dbWriter(models.Place),
    getPlaces: getPlaces(models.Place)
};
