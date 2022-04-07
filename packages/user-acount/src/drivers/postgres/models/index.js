const {User, UserSchema, Users} = require('./user.model');
const {typesOfIdentification, typesOfIdentificationSchema} = require('./types_of_id.models');

function setupModels(sequelize) {
  User.init(UserSchema, Users.config(sequelize));
  User.init(typesOfIdentificationSchema, typesOfIdentification.config(sequelize));

  Users.associate(sequelize.models);
  typesOfIdentification.associate(sequelize.models);
}

module.exports = setupModels;