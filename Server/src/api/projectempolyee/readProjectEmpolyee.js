const express = require("express");
const ProjectEmployee = require("../../models/projectempolyee");

const router = express.Router();

router.get("/projectEmpolyees", async (req, res) => {
    try {
      const projectEmpolyees = await ProjectEmployee.find();
      res.json({
        projectEmpolyees,
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