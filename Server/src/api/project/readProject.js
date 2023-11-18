const express = require("express");
const Project = require("../../models/project");
const router = express.Router();

// ... (existing routes)

// Read all projects
router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({
      projects,
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
