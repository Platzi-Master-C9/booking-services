"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const { CITIES_TABLE } = require("../models/cities.models.js");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CITIES_TABLE, {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryLey: true,
        type: DataTypes.INTEGER
      },
      name:{
        allowNull:false,
        type: DataTypes.STRING,
        unique: true
      },
      createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        default: Sequelize.NOW
      }     
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CITIES_TABLE);
  },
};
