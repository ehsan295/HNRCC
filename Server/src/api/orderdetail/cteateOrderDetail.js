// const express = require("express");
// const Orderdetail = require("../../models/orderdetail");

// const router = express.Router();

// router.post("/orderdetail", async (req, res) => {
//   try {
//     const {
//         orderdetailId,
//         orderId,
//         unit,
//         productId,
//         quantity,
//         price,

//     } = req.body;

//     const existedOrderDetail = await Orderdetail.findOne({ orderdetailId });
//     if (existedOrderDetail) {
//       return res.json({
//         message: "order Already Exists",
//       });
//     }

//     const newProduct = new Orderdetail({
//         orderdetailId,
//         orderId,
//         unit,
//         productId,
//         quantity,
//         price,

//     });

//     // Save the new product
//     const savedOrderDetail = await newOrderDetail.save();

//     res.json({
//       message: "order detail added successfully",
//       Orderdetail: savedOrderDetail,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       error: "Internal Server Error",
//     });
//   }
// });

// module.exports = router;
