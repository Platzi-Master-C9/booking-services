const { DataTypes, Sequelize } = require('sequelize');

const { USER_FAVORITE_PLACES_TABLE } = require('../models/userFavoritePlaces.models');
const { USERS_TABLE } = require('../models/user.models');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_FAVORITE_PLACES_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      placesId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.addColumn(USER_FAVORITE_PLACES_TABLE, 'user_id', {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: USERS_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(USER_FAVORITE_PLACES_TABLE, 'user_id');
    await queryInterface.dropTable(USER_FAVORITE_PLACES_TABLE);
  },
};
