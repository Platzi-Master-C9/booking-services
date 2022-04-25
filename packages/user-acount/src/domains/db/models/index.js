const {users, usersSchema} = require('./user.model');
const {userFavoritePlaces,userFavoritePlacesSchema} = require('./user_favorite_places.models');
const {typesOfIdentification, typesOfIdentificationSchema} = require('./types_of_id.models');
const {genders, gendersSchema}= require('./genders.models');
const {address, addressSchema}= require('./address.models');
const {emergencyContacts, emergencyContactsSchema }= require('./emergency_contacts.models');
const {currencies, currenciesSchema} = require('./currencies.models');
const {userTypes, userTypesSchema} = require('./user_types.models');


function setupModels(sequelize) {
  users.init(usersSchema, users.config(sequelize));
  users.init(userFavoritePlacesSchema,userFavoritePlaces.config(sequelize));
  users.init(typesOfIdentificationSchema, typesOfIdentification.config(sequelize));
  users.init(gendersSchema, genders.config(sequelize));
  users.init(addressSchema, address.config(sequelize));
  users.init(emergencyContactsSchema, emergencyContacts.config(sequelize));
  users.init(currenciesSchema, currencies.config(sequelize));
  users.init(userTypesSchema, userTypes.config(sequelize));

  users.associate(sequelize.models);
  userFavoritePlaces.associate(sequelize.models);
  typesOfIdentification.associate(sequelize.models);
  genders.associate(sequelize.models);
  address.associate(sequelize.models);
  emergencyContacts.associate(sequelize.models);
  currencies.associate(sequelize.models);
  userTypes.associate(sequelize.models);
}

module.exports = setupModels;