// const boom = require('@hapi/boom');

// function validatorHandler(schema, property) {
//   return (req, res, next) => {
//     const data = req[property]
//     const { error } = schema.validate(data, { abortEarly: false });
//     if (error) {
//       next(boom.badRequest(error));
//     }
//     next();
//   }
// }

function validatorHandler(schema, property) {
  const { error } = schema.validate(property, { abortEarly: false });
  if (error) {
    return error;
  }
  return property;
};

module.exports = validatorHandler;