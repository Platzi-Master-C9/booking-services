// TODO_JAIRO: schema doesn't work properly
const defaultSchema = {
  description: 'Index Route',
  tags: ['Administration panel'],
};

const changeUSerStatusSchema = {
  description: 'change user status: Given a status and a reason, change the status of a user and send a notification to the user',
  tags: ['Administration panel'],
  body: {
    type: 'object',
    properties: {
      status: { type: 'string' },
      reason: { type: 'string' },
    },
    required: ['status', 'reason'],
  },
  params: {
    type: 'object',
    properties: {
      user_id: { type: 'number' },
    },
    required: ['user_id'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: { type: 'string' },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const userListSchema = {
  description: 'Get a list of users',
  tags: ['Administration panel'],
  querystring: {
    type: 'object',
    properties: {
      status: { type: 'string' },
      userType: { type: 'number' },
      validated: { type: 'boolean' },
      fullName: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              fullName: { type: 'string' },
              urlImage: { type: 'string' },
              dateOfRegister: { type: 'string' },
              userType: { type: 'number' },
              validated: { type: 'boolean' },
              status: { type: 'string' },
            },
          },
        },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const userDetailSchema = {
  description: 'Get a user detail',
  tags: ['Administration panel'],
  params: {
    type: 'object',
    properties: {
      user_id: { type: 'number' },
    },
    required: ['user_id'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            fullName: { type: 'string' },
            urlImage: { type: 'string' },
            dateOfRegister: { type: 'string' },
            userType: { type: 'number' },
            validated: { type: 'boolean' },
            status: { type: 'string' },
          },
        },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const adminIDSchema = {
  description: 'Query admin info: given id, get admin data',
  tags: ['Administration panel'],
  params: {
    type: 'object',
    properties: {
      admin_id: { type: 'number' },
    },
    required: ['admin_id'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            fullName: { type: 'string' },
            urlImage: { type: 'string' },
            profile: { type: 'number' },
          },
        },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const adminListSchema = {
  description: 'Query admin list data',
  tags: ['Administration panel'],
  querystring: {
    type: 'object',
    properties: {
      profile: { type: 'number' },
      fullName: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              fullName: { type: 'string' },
              urlImage: { type: 'string' },
              profile: { type: 'number' },
            },
          },
        },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const placesListSchema = {
  description: 'Get a list of places',
  tags: ['Administration panel'],
  querystring: {
    type: 'object',
    properties: {
      status: { type: 'string' },
      placeName: { type: 'string' },
      hostName: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              placeName: { type: 'string' },
              hostName: { type: 'string' },
              status: { type: 'string' },
            },
          },
        },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const editUserSchema = {
  description: 'edit user information: Giving a user id the administrator can edit the following fields, first name, second name, first surname, second surname, email, phone or url',
  tags: ['Administration panel'],
  body: {
    type: 'object',
    properties: {
      first_name: { type: 'string' },
      second_name: { type: 'string' },
      first_surname: { type: 'string' },
      second_surname: { type: 'string' },
      email: { type: 'string' },
      phone: { type: 'string' },
      url_image: { type: 'string' },
    },
  },
  params: {
    type: 'object',
    properties: {
      user_id: { type: 'number' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: { type: 'string' },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const bookingListSchema = {
  description: 'Get a list of bookings',
  tags: ['Administration panel'],
  querystring: {
    type: 'object',
    properties: {
      dateOfBook: { type: 'string' },
      status: { type: 'string' },
      place: { type: 'string' },
      userName: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        result: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              dateOfBook: { type: 'string' },
              placeName: { type: 'string' },
              userName: { type: 'string' },
              status: { type: 'string' },
              fromDate: { type: 'string' },
              endDate: { type: 'string' },
            },
          },
        },
      },
    },
    '4xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
    '5xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

const createAdminSchema = {
  description: 'Create a new admin or superAdmin',
  tags: ['Administration panel'],
  body: {
    type: 'object',
    properties: {
      first_name: { type: 'string' },
      second_name: { type: 'string' },
      first_surname: { type: 'string' },
      second_surname: { type: 'string' },
      profile: { type: 'string' },
    },
    required: [
      'first_name',
      'first_surname',
      'profile',
    ],
  },
};

module.exports = {
  defaultSchema,
  changeUSerStatusSchema,
  userListSchema,
  userDetailSchema,
  adminIDSchema,
  adminListSchema,
  placesListSchema,
  editUserSchema,
  bookingListSchema,
  createAdminSchema,
};
