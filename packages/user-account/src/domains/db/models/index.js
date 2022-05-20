const { users, usersSchema } = require('./user.models');
const { userFavoritePlaces, userFavoritePlacesSchema } = require('./userFavoritePlaces.models');
const { address, addressSchema } = require('./address.models');
const { emergencyContacts, emergencyContactsSchema } = require('./emergencyContacts.models');
const { currencies, currenciesSchema } = require('./currencies.models');

function setupModels(sequelize) {
  users.init(usersSchema, users.config(sequelize));
  users.init(userFavoritePlacesSchema, userFavoritePlaces.config(sequelize));
  users.init(addressSchema, address.config(sequelize));
  users.init(emergencyContactsSchema, emergencyContacts.config(sequelize));
  users.init(currenciesSchema, currencies.config(sequelize));

  users.associate(sequelize.models);
  userFavoritePlaces.associate(sequelize.models);
  address.associate(sequelize.models);
  emergencyContacts.associate(sequelize.models);
  currencies.associate(sequelize.models);
}

module.exports = setupModels;
