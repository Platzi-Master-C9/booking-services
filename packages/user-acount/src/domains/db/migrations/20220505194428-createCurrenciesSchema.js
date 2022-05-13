"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const { CURRENCIES_TABLE } = require("../models/currencies.models.js");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CURRENCIES_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name:{
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
    await queryInterface.dropTable(CURRENCIES_TABLE);
  },
};
