// const express = require("express");
// const Customer = require("../../models/customer");

// const router = express.Router();

// // Create  new
// router.post("/customer", async (req, res) => {
//   try {
//     const { customerId, name, ddress, phoneNumber, orderId, projectId } =
//       req.body;

//     // Check if the customer with the given ID already exists
//     const existedCustomer = await Customer.findOne({ customerId });
//     if (existedProduct) {
//       return res.json({
//         message: "مشتری مذکور موجود میباشد",
//       });
//     }

//     const newCustomer = new Customer({
//         customerId,
//          name,
//           ddress,
//            phoneNumber,
//             orderId,
//              projectId
//     });

//     const savedCustomer = await newCustomer.save();

//     res.json({
//       message: "مشتری موففانه اظافه شد",
//       Customer: savedCustomer,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       error: "Internal Server Error",
//     });
//   }
// });

// module.exports = router;
