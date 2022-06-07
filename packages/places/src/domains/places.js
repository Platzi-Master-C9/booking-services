const createPlaceQuery = (connection) => async (data) => {
    const options = [data];

    const result = await connection('insertOne', options);
    return result;
};

module.exports = {
    createPlaceQuery,
};
