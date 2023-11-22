const express = require("express");
const ProjectModel = require("../../models/project");
const { where } = require("sequelize");

const router = express.Router();

// Create a new project
router.post("/project", async (req, res) => {
  try {
    const { projectName, projectLocation } = req.body;

    // Check if the project with the given ID already exists
    const existedProject = await ProjectModel.findOne({
      where: { projectName },
    });
    if (existedProject) {
      return res.json({
        message: "Project Already Exists",
      });
    }

    // Create a new project
    const newProject = new ProjectModel({
      projectName,
      projectLocation,
    });

    // Save the new prject
    const savedProject = await newProject.save();

    res.json({
      message: "Project added successfully",
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
