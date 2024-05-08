const { fetchAllOrders } = require("../models/ordersModel");

exports.getAllOrders = async (req, res, next) => {
  const orders = await fetchAllOrders();
  res.status(200).json({ order: orders });
};
