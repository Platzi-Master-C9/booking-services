"use strict";
const { DataTypes, Sequelize } = require("sequelize");

const { CITIES_TABLE } = require("../models/cities.models.js");
const { ADDRESS_TABLE } = require("../models/address.models.js");


module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CITIES_TABLE, {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryLey: true,
        unique: true,
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
    await queryInterface.addColumn(ADDRESS_TABLE, "city_id",{      
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: CITIES_TABLE,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",          
  }) 
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CITIES_TABLE);
    await queryInterface.removeColumn(ADDRESS_TABLE, "city_id"); 
  },
};
