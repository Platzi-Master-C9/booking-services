const {Model, DataTypes, Sequelize} = require('sequelize');

const { USERS_TABLE} = require('./user.model');

const USER_TYPES_TABLE = 'user_types';

const userTypesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class userTypes extends Model{
  static associate(models){
    this.hasMany(models.users, {
      as: 'users',
      foreignKey: 'currencyId'
    });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TYPES_TABLE,
      modelName: 'user_types',
      timestamps: false
    }
  }
}

module.exports = {USER_TYPES_TABLE, userTypesSchema, userTypes}