const tableRepository = require("../repositories/tableRepository");

exports.createTable = async (table) => {
    return await tableRepository.createTable(table);
};

exports.getAllTables = async () => {
    return await tableRepository.getAllTables();
};

exports.getTableById = async (id) => {
    return await tableRepository.getTableById(id);
};