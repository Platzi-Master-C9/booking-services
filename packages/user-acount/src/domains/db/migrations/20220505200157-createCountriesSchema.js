"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const { COUNTRIES_TABLE } = require("../models/countries.models.js");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(COUNTRIES_TABLE, {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true  
      },
      createdAt:{
        allowNull:false,
        type: DataTypes.DATE,
        field: 'created_at',
        default: Sequelize.NOW
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(COUNTRIES_TABLE);
  },
};
