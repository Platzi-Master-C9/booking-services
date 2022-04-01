'use strict';

const changeUSerStatusSchema = {
	description: 'change user status',
	tags: ['AdminPanel'],
	body: {
		type: 'object',
		properties: {
			status: { type: 'string' },
			reason: { type: 'string' },
		},
		required: ['status', 'reason']
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
				result: { type: 'number' },
			},
		},
	},
};

module.exports = changeUSerStatusSchema;