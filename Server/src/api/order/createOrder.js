// const express = require("express");
// const Order = require("../../models/order");

// const router = express.Router();

// // Create a new project
// router.post("/order", async (req, res) => {
//   try {
//     const { orderId, date, orderdetailId, } =
//       req.body;

   
//     const existedOrder = await Order.findOne({ orderId });
//     if (existedProject) {
//       return res.json({
//         message: "order Already Exists",
//       });
//     }

//     const newOrder = new Order({
//         orderId, date, orderdetailId
//     });

//     // Save the new product
//     const savedOrder = await newOrder.save();

//     res.json({
//       message: "Order added successfully",
//       Order: savedOrder,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       error: "Internal Server Error",
//     });
//   }
// });

// module.exports = router;
