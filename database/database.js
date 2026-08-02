const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

let db;

async function connectDatabase() {

    db = await open({
        filename: "./restaurant.db",
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS menu (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            category TEXT NOT NULL
        );
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS tables (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tableNumber INTEGER NOT NULL,
            capacity INTEGER NOT NULL,
            status TEXT DEFAULT 'Available'
        );
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customerName TEXT NOT NULL,
            menuId INTEGER NOT NULL,
            tableId INTEGER NOT NULL,
            quantity INTEGER NOT NULL,
            status TEXT DEFAULT 'Pending',
            FOREIGN KEY(menuId) REFERENCES menu(id),
            FOREIGN KEY(tableId) REFERENCES tables(id)
        );
    `);

    console.log("Database connected.");
}

function getDb() {
    return db;
}

module.exports = {
    connectDatabase,
    getDb
};