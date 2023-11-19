const express = require("express");
const Order = require("../../models/order");

const router = express.Router();
router.put("/oder/:id", async (req, res) => {
    const orderId = req.params.id;
  
    try {
      const updatedOrder = await Order.findOneAndUpdate(
        { id: orderId },
        req.body,
        {
          new: true,
        }
      );
  
      if (updatedOrder) {
        res.json({
          message: "Order updated successfully",
          updatedOrder,
        });
      } else {
        res.json({
          message: "Order not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  });
  
  module.exports = router;
  