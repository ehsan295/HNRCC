// const express = require("express");
// const Customer = require("../../models/customer");

// const router = express.Router();
// router.delete("/customer/:id", async (req, res) => {
//     const customerId = req.params.id;

//     try {
//       const deletedCustomer = await Customer.findOneAndDelete({ _id: customerId });

//       if (deletedCustomer) {
//         res.json({
//           message: "مشتری موفقانه اضافه شد",
//         });
//       } else {
//         res.json({
//           message: "مشتری مورد نظرموجود نمیباشد",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         error: "Error deleting مشتری",
//       });
//     }
//   });

//   module.exports = router;
