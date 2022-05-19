const models = require('./domains/index');

const {
    dbWriter,
    getPlaces,
    dbDeleter,
    fileUploader,
} = require('./useCases/index');

module.exports = {
    postPlace: dbWriter(models.Place),
    getPlaces: getPlaces(models.Place),
    deletePlace: dbDeleter(models.Place),
    postImage: dbWriter(models.Image),
    postPerk: dbWriter(models.Perk),
    postSpace: dbWriter(models.Space),
    postRule: dbWriter(models.Rule),
    uploadFiles: fileUploader,
};
