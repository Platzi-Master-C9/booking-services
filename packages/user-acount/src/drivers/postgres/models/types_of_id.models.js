const {Model, DataTypes, Sequelize} = require('sequelize');

const TYPES_OF_ID_TABLE = 'Types of identification';

const typesOfIdentificationSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name :{
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
}

class typesOfIdentification extends Model {
  static associate(models) {
    this.hasMany(models.Users , {
      as: 'Users',
      foreignKey: 'TypeOfIdentificationId'
    });
  }
  static config(sequelize) {
    return{
      sequelize,
      tableName: TYPES_OF_ID_TABLE,
      modelName: 'Types of identification',
      timestamps: false
    }
  }
}

module.exports = { typesOfIdentification, typesOfIdentificationSchema, TYPES_OF_ID_TABLE }