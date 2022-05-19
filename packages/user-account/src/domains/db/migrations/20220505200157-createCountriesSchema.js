const { DataTypes, Sequelize } = require('sequelize');

const { CITIES_TABLE } = require('../models/cities.models');
const { COUNTRIES_TABLE } = require('../models/countries.models');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(COUNTRIES_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        default: Sequelize.NOW,
      },
    });
    await queryInterface.addColumn(CITIES_TABLE, 'country_id', {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: COUNTRIES_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(CITIES_TABLE, 'country_id');
    await queryInterface.dropTable(COUNTRIES_TABLE);
  },
};
