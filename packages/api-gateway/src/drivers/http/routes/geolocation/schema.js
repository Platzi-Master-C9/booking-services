'use strict';

module.exports = {
	params: {
		type: 'object',
		properties: {
			lon: { type: 'number' },
			lat: { type: 'number' },
		},
		required: ['lon', 'lat']
	}
}