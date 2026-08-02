const express = require("express");

const router = express.Router();

const tableController = require("../controllers/tableController");

router.post("/tables", tableController.createTable);

router.get("/tables", tableController.getAllTables);

router.get("/tables/:id", tableController.getTableById);

module.exports = router;