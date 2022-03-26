'use strict'

async function liveness() {
	console.log('Server Running');
	return {
		status: 'Server Running'
	}
}

module.exports = {
	liveness
}
