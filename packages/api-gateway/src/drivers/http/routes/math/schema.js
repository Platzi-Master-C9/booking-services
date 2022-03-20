'use strict';

module.exports = {
	body: {
		type: 'object',
		properties: {
			inputA: { type: 'number' },
			inputB: { type: 'number' },
		},
		required: ['inputA', 'inputB']
	}
}
