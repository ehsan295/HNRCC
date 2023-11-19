const express = require("express");
const Project = require("../../models/project");

const router = express.Router();

// Create a new project
router.post("/project", async (req, res) => {
  try {
    const { projectId, projectName, location, startDate } =
      req.body;

    // Check if the projectt with the given ID already exists
    const existedProject = await Project.findOne({ projectId });
    if (existedProject) {
      return res.json({
        message: "Product Already Exists",
      });
    }

    // Create a new project
    const newProject = new Project({
      projectId,
      projectName, 
      location,
       startDate

    });

    // Save the new product
    const savedProject = await newProject.save();

    res.json({
      message: "Product added successfully",
      Project: savedProject,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
