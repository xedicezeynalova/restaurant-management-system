const express = require("express");
const database = require("./database/database");

const menuRoutes = require("./routes/menuRoutes");
const tableRoutes = require("./routes/tableRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());

app.use("/", menuRoutes);
app.use("/", tableRoutes);
app.use("/", orderRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Restaurant Management API is running 🚀"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Restaurant Management API is running"
    });
});

database.connectDatabase()
    .then(() => {
        app.listen(3000, () => {
            console.log("Server is running on http://localhost:3000");
        });
    })
    .catch((error) => {
        console.error(error);
    });