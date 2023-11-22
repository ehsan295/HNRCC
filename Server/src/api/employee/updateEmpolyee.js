// const express = require("express");
// const Employee = require("../../models/empolyee");
// const router = express.Router();

// router.put("/employee/:id", async (req, res) => {
//   const empolyeId = req.params.id;

//   try {
//     const updatedEmployee = await Employee.findOneAndUpdate(
//       { id: empolyeId },
//       req.body,
//       {
//         new: true,
//       }
//     );

//     if (updatedEmployee) {
//       res.json({
//         message: "داده های کارمند موفقانه ویرایش شد",
//         updatedProduct,
//       });
//     } else {
//       res.json({
//         message: "کارمند موجود نیست",
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       error: "Internal Server Error",
//     });
//   }
// });

// module.exports = router;
