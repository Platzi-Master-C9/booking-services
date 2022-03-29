'use strict';

const schemaDestructuring = (object, params) => {
  let finalObject = {};

  params.forEach((field) => {
    finalObject[field] =
      field === '_id' ? object[field].toString() : object[field];
  });

  return finalObject;
};

module.exports = schemaDestructuring;
