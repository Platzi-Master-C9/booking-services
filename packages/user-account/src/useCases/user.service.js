const validatorHandler = require("../utils/validator/validatorHandler");
const { createUserSchema } = require("../utils/validator/schema/user.schema");

const createUser = (model) =>
  function ({
    email,
    firstName,
    secondName,
    firstSurname,
    secondSurname,
    birthDate,
    gender,
    phoneNumber,
  }) {
        const newUser = {
            email,
            firstName,
            secondName,
            firstSurname,
            secondSurname,
            birthDate,
            gender,
            phoneNumber,
          };
          return model
  };

module.exports = {
  createUser,
};
