const express = require("express");
const Customer = require("../../models/customer");

const router = express.Router();

router.put("/customer/:id", async (req, res) => {
    const customerId = req.params.id;
  
    try {
      const updatedCustomer = await Customer.findOneAndUpdate(
        { id: customerId },
        req.body,
        {
          new: true,
        }
      );
  
      if (updatedCustomer) {
        res.json({
          message: "مشتری موفقانه ویزایش شد",
          updatedCustomer,
        });
      } else {
        res.json({
          message: "مشتری موجود نمیباشد",
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
