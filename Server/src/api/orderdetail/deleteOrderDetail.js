// const express = require("express");
// const Orderdetail = require("../../models/orderdetail");

// const router = express.Router();

// router.delete("/orderdetail/:id", async (req, res) => {
//     const orderdetailId = req.params.id;

//     try {
//       const deletedOrderDetail = await Orderdetail.findOneAndDelete({ _id: orderdetailId });

//       if (deletedOrderDetail) {
//         res.json({
//           message: "Order detail deleted successfully",
//         });
//       } else {
//         res.json({
//           message: "order detail  not found",
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
