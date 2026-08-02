const menuService = require("../services/menuService");

exports.createMenu = async (req, res) => {
    try {
        const result = await menuService.createMenu(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xətası." });
    }
};

exports.getAllMenus = async (req, res) => {
    try {
        const menus = await menuService.getAllMenus();
        res.json(menus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xətası." });
    }
};

exports.getMenuById = async (req, res) => {
    try {
        const menu = await menuService.getMenuById(req.params.id);

        if (!menu) {
            return res.status(404).json({
                message: "Menu item tapılmadı."
            });
        }

        res.json(menu);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xətası." });
    }
};