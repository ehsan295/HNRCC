const express = require("express");
const Employee = require("../../models/empolyee");

const router = express.Router();

// Create a new product
router.post("/Employee", async (req, res) => {
  try {
    const { empolyeId, name, fatherName, tazkiraNumber, phoneNumbe, Cv, photo, position, sallary,startDate,projectId} =
      req.body;

    // Check if the product with the given ID already exists
    const existedEmployee = await Product.findOne({ empolyeId });
    if (existedEmployee) {
      return res.json({
        message: "Employee Already Exists",
      });
    }

    // Create a new Employee
    const newEmployee = new Employee({
        empolyeId,
         name, 
         fatherName, 
         tazkiraNumber,
          phoneNumbe,
           Cv,
            photo, 
            position, 
            sallary,
            startDate,
            projectId
    });

    // Save the new product
    const savedEmpolyee = await newEmployee.save();

    res.json({
      message: " کارمند موفقانه اضافه شد",
      Employee: savedEmpolyee,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
