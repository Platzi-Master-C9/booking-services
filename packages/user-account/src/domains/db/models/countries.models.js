const { Model, DataTypes, Sequelize } = require('sequelize');

const COUNTRIES_TABLE = 'countries';

const countriesSchema = {
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
};

class countries extends Model {
  static associate(models) {
    this.hasMany(models.cities, {
      as: 'cities',
      foreignKey: 'countryId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COUNTRIES_TABLE,
      modelName: 'countries',
      timestamps: false,
    };
  }
}

module.exports = { COUNTRIES_TABLE, countriesSchema, countries };
