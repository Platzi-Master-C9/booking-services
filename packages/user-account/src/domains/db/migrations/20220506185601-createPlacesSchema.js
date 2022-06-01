const { DataTypes } = require('sequelize');

const { PLACES_TABLE } = require('../models/places.models');
const { USER_FAVORITE_PLACES_TABLE } = require('../models/userFavoritePlaces.models');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PLACES_TABLE, {
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
    });
    await queryInterface.addColumn(PLACES_TABLE, 'user_favorite_places_id', {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: USER_FAVORITE_PLACES_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(PLACES_TABLE, 'user_favorite_places_id');
    await queryInterface.dropTable(PLACES_TABLE);
  },
};
