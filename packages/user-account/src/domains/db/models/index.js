const { users, usersSchema } = require('./user.models');
const { userFavoritePlaces, userFavoritePlacesSchema } = require('./userFavoritePlaces.models');
const { address, addressSchema } = require('./address.models');
const { emergencyContacts, emergencyContactsSchema } = require('./emergencyContacts.models');
const { currencies, currenciesSchema } = require('./currencies.models');

function setupModels(sequelize) {
  users.init(usersSchema, users.config(sequelize));
  userFavoritePlaces.init(userFavoritePlacesSchema, userFavoritePlaces.config(sequelize));
  address.init(addressSchema, address.config(sequelize));
  emergencyContacts.init(emergencyContactsSchema, emergencyContacts.config(sequelize));
  currencies.init(currenciesSchema, currencies.config(sequelize));

  users.associate(sequelize.models);
  userFavoritePlaces.associate(sequelize.models);
  address.associate(sequelize.models);
  emergencyContacts.associate(sequelize.models);
  currencies.associate(sequelize.models);
}

module.exports = setupModels;
