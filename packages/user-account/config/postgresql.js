'use strict';

module.exports = {
	env: process.env.NODE_ENV || 'dev',
	dbHost: process.env.PGHOST,
	dbUser: process.env.PGUSER,
	dbName: process.env.PGDATABASE,
	dbPass: process.env.PGPASSWORD,
	dbPort: process.env.PGPORT,
}

