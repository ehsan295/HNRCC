const express = require("express");
const Payment = require("../../models/payment");

const router = express.Router();


router.post("/payment", async (req, res) => {
  try {
    const { paymentId, orderId, customerId, total,payed, loan } =
      req.body;

   
    const existedPayment = await Payment.findOne({ paymentId });
    if (existedPayment) {
      return res.json({
        message: "Payment Already Exists",
      });
    }

  
    const newPayment = new Payment({
        paymentId, orderId, customerId, total,payed, loan

    });

   
    const savedPayment = await newPayment.save();

    res.json({
      message: "Payment added successfully",
      Payment: savedPayment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
