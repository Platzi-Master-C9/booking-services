const {Model, DataTypes, Sequelize} = require('sequelize');

const { USERS_TABLE, } = require('./user.model');
const { PLACES_TABLE } = require('./places.models')

const USER_FAVORITE_PLACES_TABLE = 'user_favorite_places';

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
  placeId:{
    field: "place_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PLACES_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
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
    this.belongsTo(models.places, {as: 'places'});
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