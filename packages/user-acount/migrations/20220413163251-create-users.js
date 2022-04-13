'use strict';

const {usersSchema, USERS_TABLE} = require('./../src/drivers/postgres/models/user.model');
const {userFavoritePlacesSchema,USER_FAVORITE_PLACES_TABLE} = require('./../src/drivers/postgres/models/user_favorite_places.models');
const {typesOfIdentificationSchema, TYPES_OF_ID_TABLE} = require('./../src/drivers/postgres/models/types_of_id.models');
const {gendersSchema, GENDERS_TABLES} = require('./../src/drivers/postgres/models/genders.models');
const {addressSchema, ADDRESS_TABLE} = require('./../src/drivers/postgres/models/address.models');
const {citiesSchema, CITIES_TABLE} = require('./../src/drivers/postgres/models/cities.models');
const {countriesSchema, COUNTRIES_TABLE} = require('./../src/drivers/postgres/models/countries.models');
const {emergencyContactsSchema, EMERGENCY_CONTACTS_TABLE} = require('./../src/drivers/postgres/models/emergency_contacts.models');
const {currenciesSchema, CURRENCIES_TABLE} = require('./../src/drivers/postgres/models/currencies.models');
const {userTypesSchema, USER_TYPES_TABLE} = require('./../src/drivers/postgres/models/user_types.models');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USERS_TABLE, usersSchema);
    await queryInterface.createTable(USER_FAVORITE_PLACES_TABLE, userTypesSchema);
    await queryInterface.createTable(TYPES_OF_ID_TABLE, typesOfIdentificationSchema);
    await queryInterface.createTable(GENDERS_TABLES, gendersSchema);
    await queryInterface.createTable(ADDRESS_TABLE, addressSchema);
    await queryInterface.createTable(CITIES_TABLE, citiesSchema);
    await queryInterface.createTable(COUNTRIES_TABLE, countriesSchema);
    await queryInterface.createTable(EMERGENCY_CONTACTS_TABLE, emergencyContactsSchema);
    await queryInterface.createTable(CURRENCIES_TABLE, currenciesSchema);
    await queryInterface.createTable(USER_TYPES_TABLE, userTypesSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USERS_TABLE);
    await queryInterface.dropTable(USER_FAVORITE_PLACES_TABLE);
    await queryInterface.dropTable(TYPES_OF_ID_TABLE);
    await queryInterface.dropTable(GENDERS_TABLES);
    await queryInterface.dropTable(ADDRESS_TABLE);
    await queryInterface.dropTable(CITIES_TABLE);
    await queryInterface.dropTable(COUNTRIES_TABLE);
    await queryInterface.dropTable(EMERGENCY_CONTACTS_TABLE);
    await queryInterface.dropTable(CURRENCIES_TABLE);
    await queryInterface.dropTable(USER_TYPES_TABLE);
  }
};
