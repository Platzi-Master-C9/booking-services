const {Model, DataTypes, Sequelize } = require('sequelize');
const { COUNTRIES_TABLE } = require('./countries.models');

const { } = require('./user.model')

const EMERGENCY_CONTACTS_TABLE = 'Emergency contacts'

const emergencyContactsSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  telephone_number:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class emergencyContactId extends Model {
  static associate(models){
    this.hasOne(models.users, {
      as:'users',
      foreignKey: 'emergencyContactId'
    })
  }
  static config(sequelize) {
    return{
      sequelize,
      tableName: EMERGENCY_CONTACTS_TABLE,
      modelName: 'emergency_contacts',
      timestamps: false
    }
  }
}

module.exports = { EMERGENCY_CONTACTS_TABLE, emergencyContactsSchema, emergencyContactId}