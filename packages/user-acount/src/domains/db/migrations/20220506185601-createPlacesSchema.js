"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const { PLACES_TABLE } = require("../models/places.models.js");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PLACES_TABLE, {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name:{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable(PLACES_TABLE);
  },
};
