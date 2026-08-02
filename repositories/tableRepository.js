const database = require("../database/database");

exports.createTable = async (table) => {

    const db = database.getDb();

    const result = await db.run(
        `INSERT INTO tables (tableNumber, capacity, status)
         VALUES (?, ?, ?)`,
        [
            table.tableNumber,
            table.capacity,
            table.status || "Available"
        ]
    );

    return {
        id: result.lastID,
        ...table
    };
};

exports.getAllTables = async () => {

    const db = database.getDb();

    return await db.all(`SELECT * FROM tables`);
};

exports.getTableById = async (id) => {

    const db = database.getDb();

    return await db.get(
        `SELECT * FROM tables WHERE id = ?`,
        [id]
    );
};