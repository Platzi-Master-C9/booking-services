const {Model, DataTypes, Sequelize} = require('sequelize');

const { USERS_TABLE} = require ('./user.model')

const GENDERS_TABLE = 'genders';

const gendersSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryLey: true,
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

class genders extends Model {
  static associate(models){
    this.hasMany(models.users, {
      as: 'users',
      foreignKey: 'genderId'
    })
  }
  static config(sequelize) {
    return{
      sequelize,
      tableName: GENDERS_TABLE,
      modelName: 'genders',
      timestamps: false
    }
  }
}

module.exports = { genders, gendersSchema, GENDERS_TABLE}