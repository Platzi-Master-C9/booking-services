const { Model, DataTypes, Sequelize } = require('sequelize');

const { CITIES_TABLE } = require('./cities.models');

const ADDRESS_TABLE = 'address';

const addressSchema = {
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
  cityId: {
    field: 'city_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CITIES_TABLE,
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

class address extends Model {
  static associate(models) {
    this.belongsTo(models.cities, { as: 'cities' });
    this.hasMany(models.users, {
      as: 'users',
      foreignKey: 'addressId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ADDRESS_TABLE,
      modelName: 'address',
      timestamps: false,
    };
  }
}

module.exports = { ADDRESS_TABLE, addressSchema, address };
