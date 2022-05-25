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

module.exports = validateUserSchema;
