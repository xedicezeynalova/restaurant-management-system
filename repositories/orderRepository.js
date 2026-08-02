const database = require("../database/database");

exports.createOrder = async (order) => {

    const db = database.getDb();

    const result = await db.run(
        `INSERT INTO orders
        (customerName, menuId, tableId, quantity, status)
        VALUES (?, ?, ?, ?, ?)`,
        [
            order.customerName,
            order.menuId,
            order.tableId,
            order.quantity,
            order.status || "Pending"
        ]
    );

    return {
        id: result.lastID,
        ...order
    };
};

exports.getAllOrders = async () => {

    const db = database.getDb();

    return await db.all(`SELECT * FROM orders`);
};

exports.getOrderById = async (id) => {

    const db = database.getDb();

    return await db.get(
        `SELECT * FROM orders WHERE id = ?`,
        [id]
    );
};