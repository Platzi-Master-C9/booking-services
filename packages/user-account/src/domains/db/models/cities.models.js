const { Model, DataTypes, Sequelize } = require('sequelize');

const { COUNTRIES_TABLE } = require('./countries.models');

const CITIES_TABLE = 'cities';

const citiesSchema = {
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
  countryId: {
    field: 'country_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: COUNTRIES_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    default: Sequelize.NOW,
  },
};

class cities extends Model {
  static associate(models) {
    this.belongsTo(models.countries, { as: 'countries' });
    this.hasMany(models.address, {
      as: 'address',
      foreignKey: 'cityId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CITIES_TABLE,
      modelName: 'cities',
      timestamps: false,
    };
  }
}

module.exports = { CITIES_TABLE, citiesSchema, cities };
