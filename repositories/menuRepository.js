const database = require("../database/database");

exports.createMenu = async (menu) => {

    const db = database.getDb();

    const result = await db.run(
        `INSERT INTO menu (name, price, category)
         VALUES (?, ?, ?)`,
        [menu.name, menu.price, menu.category]
    );

    return {
        id: result.lastID,
        ...menu
    };
};

exports.getAllMenus = async () => {

    const db = database.getDb();

    return await db.all(`SELECT * FROM menu`);
};

exports.getMenuById = async (id) => {

    const db = database.getDb();

    return await db.get(
        `SELECT * FROM menu WHERE id = ?`,
        [id]
    );
};