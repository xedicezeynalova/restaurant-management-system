const tableService = require("../services/tableService");

exports.createTable = async (req, res) => {
    try {
        const result = await tableService.createTable(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xətası." });
    }
};

exports.getAllTables = async (req, res) => {
    try {
        const tables = await tableService.getAllTables();
        res.json(tables);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xətası." });
    }
};

exports.getTableById = async (req, res) => {
    try {
        const table = await tableService.getTableById(req.params.id);

        if (!table) {
            return res.status(404).json({
                message: "Table tapılmadı."
            });
        }

        res.json(table);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xətası." });
    }
};