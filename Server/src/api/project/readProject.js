const express = require("express");
const Project = require("../../models/project");
const router = express.Router();

// Read all projects
router.get("/project", async (req, res) => {
  try {
    const projects = await Project.findAll();
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

module.exports = router;
