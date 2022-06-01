const { Model, DataTypes, Sequelize } = require('sequelize');

const EMERGENCY_CONTACTS_TABLE = 'emergency_contacts';

const emergencyContactsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phoneNumber: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class emergencyContacts extends Model {
  static associate(models) {
    this.hasOne(models.users, {
      as: 'users',
      foreignKey: 'emergencyContactsId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EMERGENCY_CONTACTS_TABLE,
      modelName: 'emergencyContacts',
      timestamps: false,
    };
  }
}

module.exports = { EMERGENCY_CONTACTS_TABLE, emergencyContactsSchema, emergencyContacts };
