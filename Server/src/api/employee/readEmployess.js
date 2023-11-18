const express = require("express");
const Employee = require("../../models/empolyee");
const router = express.Router();

// ... (existing routes)

// Read all Empolyees
router.get("/Employees", async (req, res) => {
  try {
    const empolyee = await Employee.find();
    res.json({
      empolyee,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

// ... (existing routes)

module.exports = router;
