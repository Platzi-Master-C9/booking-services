const {Model, DataTypes, Sequelize } = require('sequelize');

const { TYPES_OF_ID_TABLE } = require('./types_of_id.models');

const USERS_TABLE = 'users';

const Userschema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  TypeOfIdentificationId:{
    // Assign as a fk
    //unsure if auto_increment should be added
    field: 'type_of_identification_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: TYPES_OF_ID_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  firstName:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'first_name'
  },
  secondName:{
    allowNull:true,
    type: DataTypes.STRING,
    field: 'second_name'
  },
  firstSurname:{
    allowNull:false,
    type: DataTypes.STRING,
    field: 'first_surname'
  },
  secondSurname:{
    allowNull:true,
    type: DataTypes.STR, //Not if auto_increment should be added
    field: 'second_surname'
  },
  dateOfBirth:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'date_of_birth'
  },
  idGender:{
    // Assign as a fk
    //unsure if auto_increment should be added
    allowNull:false,
    primaryKey: false,
    field: 'id_gender'
  },
  email:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  telephoneNumber:{
    allowNull:false,
    type: DataTypes.STRING,
    field: 'telephone_number'
  },
  idAddress:{
    // Assign as a fk
    //unsure if auto_increment should be added
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_address'
  },
  idEmergencyContact:{
    // Assign as a fk
    //unsure if auto_increment should be added
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_emergency_contact'
  },
  passport:{
    allowNull: false,
    type: DataTypes.STRING
  },
  isVerified:{
    allowNull: false, //Does it have to be null: false?
    type: DataTypes.BOOLEAN,
    field: 'id_verified'
  },
  urlImage:{
    allowNull:true,
    type: DataTypes.TEXT,
    field: 'url_image'
  },
  idCurrency:{
    // Assign as a fk
    //unsure if auto_increment should be added
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_currency'
  },
  idUserType:{
    // Assign as a fk
    //unsure if auto_increment should be added
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_user_type'
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Users extends Model {
  static associate(models){
    this.belongsTo(models.typesOfIdentification,{as: 'typesOfIdentification' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Users',
      false
    }
  }
}

module.exports = { USERS_TABLE, UserSchema, Users}
