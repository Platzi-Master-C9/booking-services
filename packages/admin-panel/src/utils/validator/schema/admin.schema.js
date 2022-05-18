const Joi = require('joi');

const firstName = Joi.string().max(100);
const secondName = Joi.string().max(100);
const firstSurname = Joi.string().max(100);
const secondSurname = Joi.string().max(100);
const profile = Joi.string().regex(/^[1-2]{1}$/);

const createAdminSchema = Joi.object({
  firstName: firstName.required(),
  secondName,
  firstSurname: firstSurname.required(),
  secondSurname,
  profile: profile.required(),
});

module.exports = {
  createAdminSchema,
};
