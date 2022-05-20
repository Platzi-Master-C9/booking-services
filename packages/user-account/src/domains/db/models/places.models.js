const { Model, DataTypes } = require('sequelize');

const PLACES_TABLE = ' places';

const placesSchema = {
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
};

class places extends Model {
  static associate(models) {
    this.hasMany(models.userFavoritePlaces, {
      as: 'user_favorite_places',
      foreignKey: 'placesId',
    });
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
