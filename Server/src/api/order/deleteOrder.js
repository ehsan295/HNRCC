const express = require("express");
const Order = require("../../models/order");

const router = express.Router();
router.delete("/order/:orderId", async (req, res) => {
    const orderId = req.params.orderId;
  
    try {
      const deletedOrder = await Order.findOneAndDelete({ _id: orderId });
  
      if (deletedOrder) {
        res.json({
          message: "Order deleted successfully",
        });
      } else {
        res.json({
          message: "Order not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Error deleting order",
      });
    }
  });
  
  module.exports = router;