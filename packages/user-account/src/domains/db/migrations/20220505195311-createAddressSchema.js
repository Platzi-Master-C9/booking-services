const { DataTypes, Sequelize } = require('sequelize');

const { ADDRESS_TABLE } = require('../models/address.models');
const { USERS_TABLE } = require('../models/user.models');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ADDRESS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      address1: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'address_1',
      },
      address2: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'address_2',
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      zip: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        default: Sequelize.NOW,
      },
    });
    await queryInterface.addColumn(USERS_TABLE, 'address_id', {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: ADDRESS_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USERS_TABLE, 'address_id');
    await queryInterface.dropTable(ADDRESS_TABLE);
  },
};
