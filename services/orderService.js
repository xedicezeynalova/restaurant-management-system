const orderRepository = require("../repositories/orderRepository");

exports.createOrder = async (order) => {
    return await orderRepository.createOrder(order);
};

exports.getAllOrders = async () => {
    return await orderRepository.getAllOrders();
};

exports.getOrderById = async (id) => {
    return await orderRepository.getOrderById(id);
};