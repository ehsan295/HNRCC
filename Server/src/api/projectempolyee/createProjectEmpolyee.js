const express = require("express");
const ProjectEmployee = require("../../models/projectempolyee");

const router = express.Router();

router.post("/projectempolyee", async (req, res) => {
  try {
    const { projectId, employeeId, role } =
      req.body;

    
    const existedProjectEmpolyee = await ProjectEmployee.findOne({ projectId,employeeId });
    if (existedProjectEmpolyee) {
      return res.json({
        message: "Product Already Exists",
      });
    }

    const newProjectEmpolyee = new ProjectEmployee({
      projectId,
     employeeId,
     role

    });

   
    const savedProjectEmpolyee = await newProjectEmpolyee.save();

    res.json({
      message: "empolyee in this project added successfully",
      ProjectEmployee: savedProject,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
