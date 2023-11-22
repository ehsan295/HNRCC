const express = require("express");
const Project = require("../../models/project");

const router = express.Router();

// ... (existing routes)

// Delete a project by ID
router.delete("/project/:projectId", async (req, res) => {
  const projectId = req.params.projectId;

  try {
    const deletedProject = await Project.findOneAndDelete({ _id: projectId });

    if (deletedProject) {
      res.json({
        message: "Project deleted successfully",
      });
    } else {
      res.json({
        message: "Project not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error deleting projct",
    });
  }
});

module.exports = router;
