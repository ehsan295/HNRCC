// const express = require("express");
// const Payment = require("../../models/payment");

// const router = express.Router();

// router.get("/payments", async (req, res) => {
//     try {
//       const payments = await Payment.find();
//       res.json({
//         payments,
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         error: "Internal Server Error",
//       });
//     }
//   });

//   // ... (existing routes)

//   module.exports = router;
