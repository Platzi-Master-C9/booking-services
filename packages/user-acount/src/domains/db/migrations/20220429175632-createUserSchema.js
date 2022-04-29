"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const { USERS_TABLE } = require("./../models/user.model");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USERS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "first_name",
      },
      secondName: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "second_name",
      },
      firstSurname: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "first_surname",
      },
      secondSurname: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "second_surname",
      },
      dateOfBirth: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "date_of_birth",
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      telephoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "telephone_number",
      },
      passport: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      isVerified: {
        allowNull: false, //Does it have to be null: false?
        type: DataTypes.BOOLEAN,
        field: "id_verified",
      },
      urlImage: {
        allowNull: true,
        type: DataTypes.TEXT,
        field: "url_image",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.NOW,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USERS_TABLE);
  },
};
