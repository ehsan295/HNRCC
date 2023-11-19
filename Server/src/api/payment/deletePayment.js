// const express = require("express");
// const Payment = require("../../models/payment");

// const router = express.Router();

// router.delete("/payment/:id", async (req, res) => {
//     const paymentId = req.params.id;
  
//     try {
//       const deletedPayment = await Payment.findOneAndDelete({ _id: paymentId });
  
//       if (deletedPayment) {
//         res.json({
//           message: "Payment deleted successfully",
//         });
//       } else {
//         res.json({
//           message: "Payment not found",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         error: "Error deleting product",
//       });
//     }
//   });
  
//   module.exports = router;
  