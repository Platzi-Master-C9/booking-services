const Joi = require('joi');

const now = Date.now();
const cutOfDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 18)); // 18 years

const id = Joi.number().integer();
const email = Joi.string().email();
const firstName = Joi.string().max(50);
const secondName = Joi.string().max(50);
const firstSurname = Joi.string().max(50);
const secondSurname = Joi.string().max(50);
const birthDate = Joi.date().max(cutOfDate).message({ 'date.max': `Age at birth must be of legal age` });
const gender = Joi.string().valid('male', 'famale', 'not difined');
const phoneNumber = Joi.number().min(10);
const avatar = Joi.string().uri();

const createUserSchema = Joi.object({
  email: email.required(),
  firstName: firstName.required(),
  secondName,
  firstSurname: firstSurname.required(),
  secondSurname,
  birthDate: birthDate.required(),
  gender: gender.required(),
  phoneNumber: phoneNumber.required(),
});

const updateUserSchema = Joi.object({
  email,
  avatar,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
