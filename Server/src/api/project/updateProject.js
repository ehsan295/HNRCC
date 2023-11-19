const express = require("express");
const Project = require("../../models/project");
const router = express.Router();
// Update a project by ID
router.put("/project/:id", async (req, res) => {
  const projectId = req.params.id;

  try {
    const updatedProject = await Project.findOneAndUpdate(
      { id: projectId },
      req.body,
      {
        new: true,
      }
    );

    if (updatedProject) {
      res.json({
        message: "Project updated successfully",
        updatedProject,
      });
    } else {
      res.json({
        message: "Project not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
