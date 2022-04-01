const Logger = require('../../utils/logger');

const dbWritter = (Model) => async (newRowInfo) => {
    let data;
    try {
        data = await Model.create(newRowInfo);
        Logger.debug(`[dbWritter]: new row saved correctly at ${Model.tableName}`);
    } catch (error) {
        Logger.error(`[dbWritter]: error when saving a new row at ${Model.tableName}:`, error);
        throw new Error(`could not save the row at ${Model.tableName}`);
    }
    return data;
};

module.exports = dbWritter;
