const orderService = require("../services/orderService");

exports.createOrder = async (req, res) => {
    try {
        const result = await orderService.createOrder(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xətası." });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xətası." });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await orderService.getOrderById(req.params.id);

        if (!order) {
            return res.status(404).json({
                message: "Order tapılmadı."
            });
        }

        res.json(order);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server xətası." });
    }
};