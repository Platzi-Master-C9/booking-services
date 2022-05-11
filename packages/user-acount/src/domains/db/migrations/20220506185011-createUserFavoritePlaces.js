"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const { USER_FAVORITE_PLACES_TABLE } = require("./../models/userFavoritePlaces.models.js");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_FAVORITE_PLACES_TABLE, {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable(USER_FAVORITE_PLACES_TABLE);
  },
};
