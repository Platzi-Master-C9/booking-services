"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const { ADDRESS_TABLE } = require("../models/address.models.js");


module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ADDRESS_TABLE, {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      address1:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'address_1'
      },
      address2:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'address_2'
      },
      state:{
        allowNull: false,
        type: DataTypes.STRING
      },
      zip:{
        allowNull: false,
        type: DataTypes.STRING
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
    await queryInterface.dropTable(ADDRESS_TABLE);
  },
};
