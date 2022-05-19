const { Model, DataTypes, Sequelize } = require("sequelize");

const { ADDRESS_TABLE } = require("./address.models.js");
const { EMERGENCY_CONTACTS_TABLE } = require("./emergencyContacts.models.js");
const { CURRENCIES_TABLE } = require("./currencies.models.js");


const USERS_TABLE = "users";

const usersSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "first_name",
  },
  secondName: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "second_name",
  },
  firstSurname: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "first_surname",
  },
  secondSurname: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "second_surname",
  },
  dateOfBirth: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "date_of_birth",
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  telephoneNumber: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "telephone_number",
  },
  nationality:{
    allowNull: false,
    type: DataTypes.STRING(3)
  },
  DNI:{
    allowNull: false,
    type: DataTypes.STRING,
    field: "DNI"  
  },
  frontImageDNI:{
    allowNull: true,
    type: DataTypes.TEXT,
    field: "front_image_DNI"
  },
  backImageDNI:{
    allowNull: true,
    type: DataTypes.TEXT,
    field: "back_image_DNI"
  },
  passport: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  gender: {
    allowNull: false,
    type: DataTypes.ENUM('Male', 'Female', 'Non-binary')
  },
  userType: {
    allowNull: false,
    defaultValue: "Non-host",
    type: DataTypes.ENUM('Host','Non-host'),
    field: 'user_type'
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    field: "is_verified",
    defaultValue: false
  },
  status:{
    type: DataTypes.ENUM('active','deactivated', 'deleted', 'banned'),
    defaultValue: "active"
  },
  urlImage: {
    allowNull: true,
    type: DataTypes.TEXT,
    field: "url_image",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
  addressId: {
    field: "address_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ADDRESS_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  emergencyContactsId: {
    field: "emergency_contact_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EMERGENCY_CONTACTS_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  currencyId: {
    field: "currency_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CURRENCIES_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  }
}

class users extends Model {
  static associate(models) {
    this.belongsTo(models.address, { as: "address" });
    this.belongsTo(models.emergencyContacts, { as: "emergency_contacts" });
    this.belongsTo(models.currencies, { as: "currencies" });
    this.hasMany(models.userFavoritePlaces, {
      as: "user_favorite_places",
      foreignKey: "userId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: "users",
      timestamps: false,
    };
  }
}

module.exports = { USERS_TABLE, usersSchema, users };
