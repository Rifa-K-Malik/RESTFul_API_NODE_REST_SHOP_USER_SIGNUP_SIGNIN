const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/orders");
// const checkAuth = require("../middleware/checkauth");

// Handle incoming GET requests to /orders
router.get("/", OrderController.order_get_all);

router.post("/", OrderController.orders_create_order );

router.get("/:orderId", OrderController.orders_get_order);

router.delete("/:orderId", OrderController.order_delete_order);

module.exports = router;