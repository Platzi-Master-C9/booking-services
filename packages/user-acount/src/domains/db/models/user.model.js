const { Model, DataTypes, Sequelize } = require("sequelize");

const { TYPES_OF_ID_TABLE } = require("./typesOfId.models");
const { ADDRESS_TABLE } = require("./address.models");
const { EMERGENCY_CONTACTS_TABLE } = require("./emergencyContacts.models");
const { CURRENCIES_TABLE } = require("./currencies.models");
const { USER_TYPES_TABLE } = require("./userTypes.models");

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
  passport: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  gender: {
    allowNull: false,
    type: DataTypes.ENUM('Male', 'Female', 'Non-binary')
  },
  isVerified: {
    allowNull: false, //Does it have to be null: false?
    type: DataTypes.BOOLEAN,
    field: "id_verified",
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
  typesOfIdentificationId: {
    //unsure if auto_increment should be added
    field: "types_of_identification_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPES_OF_ID_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  addressId: {
    //unsure if auto_increment should be added
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
  emergencyContactId: {
    //unsure if auto_increment should be added
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
    //unsure if auto_increment should be added
    field: "currency_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CURRENCIES_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  userTypeId: {
    field: "user_type_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TYPES_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class users extends Model {
  static associate(models) {
    this.belongsTo(models.typesOfIdentification, {
      as: "types_of_identification_id",
    });
    this.belongsTo(models.address, { as: "address" });
    this.belongsTo(models.emergencyContact, { as: "emergency_contact_id" });
    this.belongsTo(models.currencies, { as: "currency_id" });
    this.belongsTo(models.userTypes, { as: "user_type_id" });
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
