const express = require("express");
const Orderdetail = require("../../models/orderdetail");

const router = express.Router();
router.get("/orderdetails", async (req, res) => {
    try {
      const orderdetails = await Orderdetail.find();
      res.json({
        orderdetails,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  });
  
  // ... (existing routes)
  
  module.exports = router;