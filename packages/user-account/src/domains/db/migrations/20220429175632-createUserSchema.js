const { DataTypes, Sequelize } = require('sequelize');

const { USERS_TABLE } = require('../models/user.models');

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
        field: 'first_name',
      },
      secondName: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'second_name',
      },
      firstSurname: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'first_surname',
      },
      secondSurname: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'second_surname',
      },
      birthDate: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'birth_date',
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'phone_number',
      },
      nationality: {
        allowNull: true,
        type: DataTypes.STRING(3),
      },
      dniId: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'dni_id',
      },
      dniFrontImg: {
        allowNull: true,
        type: DataTypes.TEXT,
        field: 'dni_front_img',
      },
      dniBackImg: {
        allowNull: true,
        type: DataTypes.TEXT,
        field: 'dni_back_image',
      },
      passport: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      gender: {
        allowNull: false,
        type: DataTypes.ENUM('Male', 'Female', 'Non-binary'),
      },
      userType: {
        allowNull: false,
        defaultValue: 'Non-host',
        type: DataTypes.ENUM('Host', 'Non-host'),
        field: 'user_type',
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        field: 'is_verified',
        defaultValue: false,
      },
      status: {
        type: DataTypes.ENUM('active', 'deactivated', 'deleted', 'banned'),
        defaultValue: 'active',
      },
      avatar: {
        allowNull: true,
        type: DataTypes.TEXT,
        field: 'avatar',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable(USERS_TABLE);
  },
};
