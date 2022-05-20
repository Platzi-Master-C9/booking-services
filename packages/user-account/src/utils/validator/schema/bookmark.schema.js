const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(50);

const createBookmarkSchema = Joi.object({
    userId: id.required(),
    bookmarkName: name.required(),
    places: Joi.array().items(id)
});

const getBookmarkSchema = Joi.object({
    userId: id.required(),
    bookmarkId: id.required(),
});

const getBookmarksListSchema = Joi.object({
    userId: id.required(),
});

const updateBookmarkSchema = Joi.object({
    userId: id.required(),
    bookmarkId: id.required(),
    bookmarkName: name,
});

const addItemInBookmarkschema = Joi.object({
    userId: id.required(),
    bookmarkId: id.required(),
    placeId: id.required(),
});

module.exports = {
    createBookmarkSchema,
    getBookmarkSchema,
    getBookmarksListSchema,
    updateBookmarkSchema,
    addItemInBookmarkschema
};