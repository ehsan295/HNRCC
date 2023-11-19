// const express = require("express");
// const Orderdetail = require("../../models/orderdetail");

// const router = express.Router();

// router.put("/orderdetail/:id", async (req, res) => {
//     const orderdetailId = req.params.id;

//     try {
//       const updatedOrderDetail = await Orderdetail.findOneAndUpdate(
//         { id: orderdetailId },
//         req.body,
//         {
//           new: true,
//         }
//       );

//       if (updatedOrderDetail) {
//         res.json({
//           message: "order detail updated successfully",
//           updatedOrderDetail,
//         });
//       } else {
//         res.json({
//           message: "order detail not found",
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
