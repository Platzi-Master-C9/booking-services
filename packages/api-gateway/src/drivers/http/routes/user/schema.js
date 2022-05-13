const createUserSchema = {
  description: 'Create a new user',
  tags: ['Users'],
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      firstName: { type: 'string' },
      secondName: { type: 'string' },
      firstSurname: { type: 'string' },
      secondSurname: { type: 'string' },
      birthDate: { type: 'string' },
      gender: { type: 'string' },
      phoneNumber: { type: 'string' },
    },
    required: [
      'email',
      'firstName',
      'firstSurname',
      'birthDate',
      'gender',
    ],
  },
};

const validateUserSchema = {
  description: 'validate user',
  tags: ['Users'],
  params: {
    type: 'object',
    required: ['userId'],
    properties: {
      userId: { type: 'string' },
    },
  },
  body: {
    type: 'object',
    properties: {
      firstName: { type: 'string' },
      secondName: { type: 'string' },
      firstSurname: { type: 'string' },
      secondSurname: { type: 'string' },
      birthDate: { type: 'string' },
      nationality: { type: 'string' },
      dniId: { type: 'string' },
      dniFrontImg: { type: 'string' },
      dniBackImg: { type: 'string' },
      gender: { type: 'string' },
      phoneNumber: { type: 'string' },
      emergencyNumber: { type: 'string' },
      passport: { type: 'string' },
      address: {
        country: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
        address: { type: 'string' },
        zip: { type: 'string' },
      },
    },
    required: [
      'firstName',
      'firstSurname',
      'birthDate',
      'nationality',
      'dniId',
      'dniFrontImg',
      'dniBackImg',
      'gender',
      'address',
    ],
  },
};

const updateUserSchema = {
  description: 'update user',
  tags: ['Users'],
  params: {
    type: 'object',
    required: ['userId'],
    properties: {
      userId: { type: 'string' },
    },
  },
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      avatar: { type: 'string' },
      firstName: { type: 'string' },
      secondName: { type: 'string' },
      firstSurname: { type: 'string' },
      secondSurame: { type: 'string' },
      birthDate: { type: 'string' },
      nationality: { type: 'string' },
      dniId: { type: 'string' },
      dniFrontImg: { type: 'string' },
      dniBackImg: { type: 'string' },
      gender: { type: 'string' },
      phoneNumbre: { type: 'string' },
      emergencyNumber: { type: 'string' },
      passport: { type: 'string' },
      address: {
        country: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
        address: { type: 'string' },
        zip: { type: 'string' },
      },
    },
  },
};

module.exports = {
  createUserSchema,
  validateUserSchema,
  updateUserSchema,
};
