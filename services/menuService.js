const menuRepository = require("../repositories/menuRepository");

exports.createMenu = async (menu) => {
    return await menuRepository.createMenu(menu);
};

exports.getAllMenus = async () => {
    return await menuRepository.getAllMenus();
};

exports.getMenuById = async (id) => {
    return await menuRepository.getMenuById(id);
};