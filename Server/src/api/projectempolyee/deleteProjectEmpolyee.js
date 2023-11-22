const express = require("express");
const ProjectEmployee = require("../../models/projectempolyee");

const router = express.Router();

router.delete("/projectempolyee/:empolyeeId", async (req, res) => {
    const empolyeeId = req.params.empolyeeId;
  
    try {
      const deletedProjectEmpolyee = await ProjectEmployee.findOneAndDelete({ _id: empolyeeId });
  
      if (deletedProjectEmpolyee) {
        res.json({
          message: "empolyee  deleted  from this project successfully",
        });
      } else {
        res.json({
          message: " empolyee is not found in this Project ",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Error deleting empolyee in this projct",
      });
    }
  });
  
  module.exports = router;