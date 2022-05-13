const Joi = require('joi');

const now = Date.now();
const cutOfDate = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18); // 18 years
const iso3166Alpha3 = /^(A(BW|FG|GO|IA|L[AB]|ND|R[EGM]|SM|T[AFG]|U[ST]|ZE)|B(DI|E[LNS]|FA|G[DR]|H[RS]|IH|L[MRZ]|MU|OL|R[ABN]|TN|VT|WA)|C(A[FN]|CK|H[ELN]|IV|MR|O[DGKLM]|PV|RI|U[BW]|XR|Y[MP]|ZE)|D(EU|JI|MA|NK|OM|ZA)|E(CU|GY|RI|S[HPT]|TH)|F(IN|JI|LK|R[AO]|SM)|G(AB|BR|EO|GY|HA|I[BN]|LP|MB|N[BQ]|R[CDL]|TM|U[FMY])|H(KG|MD|ND|RV|TI|UN)|I(DN|MN|ND|OT|R[LNQ]|S[LR]|TA)|J(AM|EY|OR|PN)|K(AZ|EN|GZ|HM|IR|NA|OR|WT)|L(AO|B[NRY]|CA|IE|KA|SO|TU|UX|VA)|M(A[CFR]|CO|D[AGV]|EX|HL|KD|L[IT]|MR|N[EGP]|OZ|RT|SR|TQ|US|WI|Y[ST])|N(AM|CL|ER|FK|GA|I[CU]|LD|OR|PL|RU|ZL)|OMN|P(A[KN]|CN|ER|HL|LW|NG|OL|R[IKTY]|SE|YF)|QAT|R(EU|OU|US|WA)|S(AU|DN|EN|G[PS]|HN|JM|L[BEV]|MR|OM|PM|RB|SD|TP|UR|V[KN]|W[EZ]|XM|Y[CR])|T(C[AD]|GO|HA|JK|K[LM]|LS|ON|TO|U[NRV]|WN|ZA)|U(GA|KR|MI|RY|SA|ZB)|V(AT|CT|EN|GB|IR|NM|UT)|W(LF|SM)|YEM|Z(AF|MB|WE))$/;

const id = Joi.number().integer();
const email = Joi.string().email();
const firstName = Joi.string().max(50);
const secondName = Joi.string().max(50);
const firstSurname = Joi.string().max(50);
const secondSurname = Joi.string().max(50);
const birthDate = Joi.date().max(cutOfDate).message({ 'date.max': 'Age at birth must be of legal age' });
const gender = Joi.string().valid('Male', 'Female', 'Not difined');
const phoneNumber = Joi.string().regex(/^[0-9]{10}$/);
const passport = Joi.string().max(50);
const avatar = Joi.string().uri();
const city = Joi.string().max(50);
const state = Joi.string().max(50);
const address = Joi.string().max(50);
const zip = Joi.string().max(20);
const nationality = Joi.string().length(3).regex(iso3166Alpha3).message({ 'string.pattern.base': 'has to be iso 3166 alpha-3 format' });
const dniId = Joi.string().max(20);
const dniImg = Joi.string().uri();

const addressSchema = Joi.object({
  country: nationality.required(),
  city: city.required(),
  state,
  address: address.required(),
  zip: zip.required(),
});

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

const validateUserSchema = Joi.object({
  userId: id.required(),
  firstName: firstName.required(),
  secondName,
  firstSurname: firstSurname.required(),
  secondSurname,
  birthDate: birthDate.required(),
  nationality: nationality.required(),
  dniId: dniId.required(),
  dniFrontImg: dniImg.required(),
  dniBackImg: dniImg.required(),
  gender: gender.required(),
  phoneNumber,
  emergencyNumber: phoneNumber,
  passport,
  address: addressSchema.required(),
});

const updateUserSchema = Joi.object({
  userId: id.required(),
  email,
  avatar,
  firstName,
  secondName,
  firstSurname,
  secondSurname,
  birthDate,
  nationality,
  dniId,
  dniFrontImg: dniImg,
  dniBackImg: dniImg,
  gender,
  phoneNumber,
  emergencyNumber: phoneNumber,
  passport,
  address: {
    country: nationality,
    city,
    state,
    address,
    zip,
  },
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
