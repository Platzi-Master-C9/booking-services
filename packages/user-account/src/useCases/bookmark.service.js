const boom = require('@hapi/boom');

async function createBookmark(model, data) {
  try {
    const newBookmark = await model.userFavoritePlaces.create(data);
    return newBookmark;
  } catch (error) {
    return boom.badRequest(error);
  }
}

function getBookmark(model, data) {
  const { bookmarkId } = data;
  const bookmark = model.userFavoritePlaces.findByPk(bookmarkId);
  if (bookmark === null) {
    return boom.notFound('Bookmark not found');
  }
  return bookmark;
}

function getBookmarksList(model, data) {
  const { userId } = data;
  const bookmarks = model.userFavoritePlaces.findAll({ where: { userId } });
  if (bookmarks === null) {
    return boom.notFound('Bookmarks not found');
  }
  return bookmarks;
}

function updateBookmark(model, data) {
  data.renameProperty('bookmarkId', 'id');
  const updateBookmarkId = model.userFavoritePlaces.update(data);
  if (updateBookmarkId === null) {
    return boom.notFound('Bookmark not found');
  }
  return updateBookmarkId;
}

function deleteBookmark(model, data) {
  return data;
}

function addItemInBookmark(model, data) {
  return data;
}

function deleteItemInBookmark(model, data) {
  return data;
}

module.exports = {
  createBookmark,
  getBookmark,
  getBookmarksList,
  updateBookmark,
  deleteBookmark,
  addItemInBookmark,
  deleteItemInBookmark,
};
