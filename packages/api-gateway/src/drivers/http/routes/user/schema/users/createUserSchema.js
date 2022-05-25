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

module.exports = createUserSchema;
