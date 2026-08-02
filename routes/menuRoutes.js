const express = require("express");

const router = express.Router();

const menuController = require("../controllers/menuController");

router.post("/menu", menuController.createMenu);

router.get("/menu", menuController.getAllMenus);

router.get("/menu/:id", menuController.getMenuById);

module.exports = router;