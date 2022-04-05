const models = require('./domains/index');

const {
    dbWriter
} = require('./useCases/index');

module.exports = {
    postPlace: dbWriter(models.Place)
};
