const {Model, DataTypes, Sequelize } = require('sequelize');
const { EMERGENCY_CONTACTS_TABLE } = require('./emergency_contacts.models');

const{ USERS_TABLE } = require('./user.model')

const CURRENCIES_TABLE = 'currencies';

const currenciesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class emergencyContactId extends Model {
  static associate(models){
    this.hasMany(models.users,{
      as: 'users',
      foreignKey: 'currencyId'
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: CURRENCIES_TABLE,
      modelName: 'currencies',
      timestamps: false
    }
  }
}

module.exports = {CURRENCIES_TABLE, currenciesSchema, currencies }