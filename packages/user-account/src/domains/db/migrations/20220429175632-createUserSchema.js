"use strict";
const { DataTypes, Sequelize } = require("sequelize");

const { USERS_TABLE } = require("./../models/user.models.js");
const { USER_FAVORITE_PLACES_TABLE } = require("./../models/userFavoritePlaces.models.js");




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
      nationality:{
        allowNull: false,
        type: DataTypes.STRING(3)
      },
      DNI:{
        allowNull: false,
        type: DataTypes.STRING,
        field: "DNI"  
      },
      frontImageDNI:{
        allowNull: true,
        type: DataTypes.TEXT,
        field: "front_image_DNI"
      },
      backImageDNI:{
        allowNull: true,
        type: DataTypes.TEXT,
        field: "back_image_DNI"
      },
      passport: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      gender: {
        allowNull: false,
        type: DataTypes.ENUM('Male', 'Female', 'Non-binary')
      },
      userType: {
        allowNull: false,
        defaultValue: "Non-host",
        type: DataTypes.ENUM('Host','Non-host'),
        field: 'user_type'
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        field: "is_verified",
        defaultValue: false
      },
      status:{
        type: DataTypes.ENUM('active','deactivated', 'deleted', 'banned'),
        defaultValue: "active"
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
      },    
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable(USERS_TABLE);
  },
};
