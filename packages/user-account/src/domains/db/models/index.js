const { users, usersSchema } = require('./user.models');
const { userFavoritePlaces, userFavoritePlacesSchema } = require('./userFavoritePlaces.models');
const { address, addressSchema } = require('./address.models');
const { emergencyContacts, emergencyContactsSchema } = require('./emergencyContacts.models');
const { currencies, currenciesSchema } = require('./currencies.models');
const { places, placesSchema } = require('./places.models');
const { cities, citiesSchema } = require('./cities.models');
const { countries, countriesSchema } = require('./countries.models');

function setupModels(sequelize) {
  users.init(usersSchema, users.config(sequelize));
  userFavoritePlaces.init(userFavoritePlacesSchema, userFavoritePlaces.config(sequelize));
  address.init(addressSchema, address.config(sequelize));
  emergencyContacts.init(emergencyContactsSchema, emergencyContacts.config(sequelize));
  currencies.init(currenciesSchema, currencies.config(sequelize));
  places.init(placesSchema, places.config(sequelize));
  cities.init(citiesSchema, cities.config(sequelize));
  countries.init(countriesSchema, countries.config(sequelize));

  users.associate(sequelize.models);
  userFavoritePlaces.associate(sequelize.models);
  address.associate(sequelize.models);
  emergencyContacts.associate(sequelize.models);
  currencies.associate(sequelize.models);
  places.associate(sequelize.models);
  cities.associate(sequelize.models);
  countries.associate(sequelize.models);
}

module.exports = setupModels;
