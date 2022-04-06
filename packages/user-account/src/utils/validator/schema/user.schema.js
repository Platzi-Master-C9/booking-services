const Joi = require("joi");

const now = Date.now();
const cutOfDate = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18); // 18 years
const iso_3166_alpha_3 = /^(A(BW|FG|GO|IA|L(A|B)|N(D|T)|R(E|G|M)|SM|T(A|F|G)|U(S|T)|ZE)|B(DI|E(L|N)|FA|G(D|R)|H(R|S)|IH|L(M|R|Z)|MU|OL|R(A|B|N)|TN|VT|WA)|C(A(F|N)|CK|H(E|L|N)|IV|MR|O(D|G|K|L|M)|PV|RI|UB|XR|Y(M|P)|ZE)|D(EU|JI|MA|NK|OM|ZA)|E(CU|GY|RI|S(H|P|T)|TH)|F(IN|JI|LK|R(A|O)|SM)|G(AB|BR|EO|GY|HA|I(B|N)|LP|MB|NQ|NB|R(C|D|L)|TM|U(F|M|Y))|H(KG|MD|ND|RV|TI|UN)|I(DN|MN|ND|OT|R(L|N|Q)|S(L|R)|TA)|J(AM|EY|OR|PN)|K(AZ|EN|GZ|HM|IR|NA|OR|WT)|L(AO|B(N|R|Y)|CA|IE|KA|SO|TU|UX|VA)|M(A(C|F|R)|CO|D(A|G|V)|EX|HL|KD|L(I|T)|MR|N(E|G|P)|OZ|RT|SR|TQ|US|WI|Y(S|T))|N(AM|CL|ER|FK|GA|I(C|U)|LD|OR|PL|RU|ZL)|OMN|P(A(K|N)|CN|ER|HL|LW|NG|OL|R(I|K|T|Y)|SE|YF)|QAT|R(EU|OU|US|WA)|S(AU|DN|EN|G(P|S)|HN|JM|L(B|E|V)|MR|OM|PM|RB|TP|UR|V(K|N)|W(E|Z)|Y(C|R))|T(C(A|D)|GO|HA|JK|K(L|M)|LS|ON|TO|U(N|R|V)|WN|ZA)|U(EN|GA|KR|MI|RY|SA|ZB)|V(AT|CT|GB|IR|NM|UT)|W(LF|SM)|YEM|Z(AF|MB|WE))$/

const id = Joi.number().integer();
const email = Joi.string().email();
const firstName = Joi.string().max(50);
const secondName = Joi.string().max(50);
const firstSurname = Joi.string().max(50);
const secondSurname = Joi.string().max(50);
const birthDate = Joi.date().max(cutOfDate).message({ 'date.max': `Age at birth must be of legal age` });
const gender = Joi.string().valid('male', 'famale', 'not difined');
const phoneNumber = Joi.number().min(10);
const passport = Joi.string().max(50)
const avatar = Joi.string().uri();
const city = Joi.string().max(50);
const state = Joi.string().max(50);
const address = Joi.string().max(50);
const zip = Joi.string().max(20);
const nationality = Joi.string().regex(iso_3166_alpha_3); //.messages({string: "has to be iso 3166 alpha-3 format"});
const dniId = Joi.string().max(20);
const dniImg = Joi.string().uri();

const addressSchema = Joi.object({
  country: nationality.required(),
  city: city.required(),
  state: state,
  address: address.required(),
  zip: zip.required(),
});

const createUserSchema = Joi.object({
  email: email.required(),
  firstName: firstName.required(),
  secondName: secondName,
  firstSurname: firstSurname.required(),
  secondSurname: secondSurname,
  birthDate: birthDate.required(),
  gender: gender.required(),
  phoneNumber: phoneNumber.required(),
});

const validateUserSchema = Joi.object({
  firstName: firstName.required(),
  secondName: secondName,
  firstSurname: firstSurname.required(),
  secondSurname: secondSurname,
  birthDate: birthDate.required(),
  nationality: nationality.required(),
  dniId: dniId.required(),
  dniFrontImg: dniImg.required(),
  dniBackImg: dniImg.required(),
  gender: gender.required(),
  phoneNumber: phoneNumber,
  emergencyNumber: phoneNumber,
  passport: passport,
  address: addressSchema.required()
});

const updateUserSchema = Joi.object({
  email,
  avatar,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  addressSchema,
  validateUserSchema,
};
