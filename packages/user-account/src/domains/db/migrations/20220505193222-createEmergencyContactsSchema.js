const { DataTypes, Sequelize } = require('sequelize');

const { EMERGENCY_CONTACTS_TABLE } = require('../models/emergencyContacts.models');
const { USERS_TABLE } = require('../models/user.models');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(EMERGENCY_CONTACTS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.addColumn(USERS_TABLE, 'emergency_contacts_id', {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: EMERGENCY_CONTACTS_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USERS_TABLE, 'emergency_contacts_id');
    await queryInterface.dropTable(EMERGENCY_CONTACTS_TABLE);
  },
};
