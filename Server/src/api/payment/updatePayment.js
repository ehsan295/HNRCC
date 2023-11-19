// const express = require("express");
// const Payment = require("../../models/payment");

// const router = express.Router();

// router.put("/payment/:id", async (req, res) => {
//     const paymentId = req.params.id;

//     try {
//       const updatedPayment = await Payment.findOneAndUpdate(
//         { id: paymentId },
//         req.body,
//         {
//           new: true,
//         }
//       );

//       if (updatedPayment) {
//         res.json({
//           message: "Payment updated successfully",
//           updatedPayment,
//         });
//       } else {
//         res.json({
//           message: "Payment not found",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         error: "Internal Server Error",
//       });
//     }
//   });

//   module.exports = router;
