const { Sequelize } = require('sequelize');

const Logger = require('../../utils/logger');

const {
    db, user, pass, host
} = require('../../../config/dbcredentials');

const sequelize = new Sequelize(db, user, pass, {
    host,
    dialect: 'mysql'
});

sequelize.afterConnect(() => {
    Logger.debug('[mysql]: Client connection oppened');
});

sequelize.beforeDisconnect(() => {
    Logger.debug('[mysql]: Client was disconnected');
});

module.exports = sequelize;
