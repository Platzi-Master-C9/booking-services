const { Model, DataTypes } = require('sequelize');

const { USER_FAVORITE_PLACES_TABLE } = require('./userFavoritePlaces.models');

const PLACES_TABLE = ' places';

const placesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  placesId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userFavoritePlacesId: {
    field: 'user_favorite_places_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_FAVORITE_PLACES_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class places extends Model {
  static associate(models) {
    this.belongsTo(models.userFavoritePlaces, { as: 'user_favorite_places' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PLACES_TABLE,
      modelName: 'places',
      timestamps: false,
    };
  }
}

module.exports = { PLACES_TABLE, placesSchema, places };
