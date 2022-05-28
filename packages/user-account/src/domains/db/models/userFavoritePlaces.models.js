const { Model, DataTypes, Sequelize } = require('sequelize');

const { USERS_TABLE } = require('./user.models');

const USER_FAVORITE_PLACES_TABLE = 'user_favorite_places';

const userFavoritePlacesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USERS_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    OnDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class userFavoritePlaces extends Model {
  static associate(models) {
    this.belongsTo(models.users, { as: 'users' });
    this.hasMany(models.places, {
      as: 'places',
      foreignKey: 'userFavoritePlacesId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_FAVORITE_PLACES_TABLE,
      modelName: 'userFavoritePlaces',
      timestamps: false,
    };
  }
}

module.exports = { USER_FAVORITE_PLACES_TABLE, userFavoritePlacesSchema, userFavoritePlaces };
