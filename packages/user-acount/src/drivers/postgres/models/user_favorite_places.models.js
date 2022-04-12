const {Model, DataTypes, Sequelize} = require('sequelize');
const { USERS_TABLE, } = require('./user.model', './places.model');

const USER_FAVORITE_PLACES_TABLE = 'User favorite places';

const userFavoritePlacesSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: USERS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    OnDelete: 'SET NULL'
  },
//  favoriteId:{
//    field: 'favorite_id',
//    allowNull: false,
//    type: DataTypes.INTEGER,
//    references:{
//      model: ??
//      key: ''
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class userFavoritePlaces extends Model {
  static associate(models) {
    this.belongsTo(models.users, {as: 'users'});
  }
  
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_FAVORITE_PLACES,
      modelName: 'user_favorite_places',
      timestamps: false
    }
  }
}

module.exports = {USER_FAVORITE_PLACES_TABLE, userFavoritePlacesSchema, userFavoritePlaces}