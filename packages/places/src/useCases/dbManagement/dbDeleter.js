const { Logger } = require('@booking-services/shared');

const dbDeleter = (Model) => async (id) => {
    try {
        const data = await Model.update({
            is_active: false,
        }, {
            where: {
                id,
                is_active: true,
            },
        });
        if (data[0] === 0) {
            throw new Error();
        }
        Logger.debug(`[dbDeleter]: element from ${Model.tableName} with id ${id} has been deleted correctly.`);
        return true;
    } catch (error) {
        Logger.error(`[dbDeleter]: element from ${Model.tableName} with id ${id} could not be deleted.`);
        throw new Error(`could not delete element from ${Model.tableName}`);
    }
};

module.exports = dbDeleter;
