const Joi = require('joi');

const now = Date().now();
const cutOfDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 18)); // 18 years

const id = Joi.number().integer();
const email = Joi.string().email();
const firstName = Joi.string().max(50);
const secondName = Joi.string().max(50);
const firstSurname = Joi.string().max(50);
const secondSurname = Joi.string().max(50);
const birthDate = Joi.date().max(cutOfDate);
const gander = Joi.string().valid('male', 'famale', 'not difined');
const phoneNumber = Joi.string().length(10).pattern(/^[0-9]+$/);
const avatar = Joi.string().uri();


const createUserSchema = Joi.object({
    email: email.required(),
    firstName: firstName.required(),
    secondName: secondName,
    firstSurname: firstSurname.required(),
    secondSurname: secondSurname,
    birthDate: birthDate.required(),
    gander: gander.required(),
    phoneNumber: phoneNumber.required(),
});

const updateUserSchema = Joi.object({
  email: email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }

// "email": "varchar(200) NOT NULL UNIQUE",
// "firstName": "varchar(50) NOT NULL",
// "secondName": "varchar(50)",
// "firstSurname": "varchar(50) NOT NULL",
// "seconsName": "varchar(50)",
// "birthDate": "date NOT NULL", //verification of legal age
// "gender": "enum('male', 'famele', 'not difined') NOT NULL",
// "phoneNumber": "varchar() NOT NULL"