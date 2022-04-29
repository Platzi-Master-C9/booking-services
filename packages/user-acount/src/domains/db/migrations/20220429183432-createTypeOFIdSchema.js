'use strict';

const { Model, DataTypes, Sequelize } = require("sequelize");
const { USERS_TABLE } = require("./../models/user.model");
const { TYPES_OF_ID_TABLE } = require("./../models/types_of_id.models");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TYPES_OF_ID_TABLE, {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name :{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,        
      }
    });
    await queryInterface.addColumn(USERS_TABLE, 'typesOfIdentificationId', {
      field: "types_of_identification_id",
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: TYPES_OF_ID_TABLE,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USERS_TABLE, 'typesOfIdentificationId');
    await queryInterface.dropTable(TYPES_OF_ID_TABLE);
  }
};
