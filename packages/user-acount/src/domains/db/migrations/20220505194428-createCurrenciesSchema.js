"use strict";
const { DataTypes, Sequelize } = require("sequelize");

const { USERS_TABLE } = require("../models/user.models.js");
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
    await queryInterface.addColumn(USERS_TABLE, "currency_id",{      
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: CURRENCIES_TABLE,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",          
  })
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CURRENCIES_TABLE);
    await queryInterface.removeColumn(USERS_TABLE, "currency_id"); 
  },
};
