const express = require("express");
const router = express();
const { getAllOrders } = require("../controllers/ordersController");

router.get("/", getAllOrders);

module.exports = router;
