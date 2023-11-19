const express = require("express");
const ProjectEmployee = require("../../models/projectempolyee");

const router = express.Router();

router.put("/projectempolyee/:id", async (req, res) => {
    const empolyeeId = req.params.id;
  
    try {
      const updatedProjectEmpolyee = await ProjectEmployee.findOneAndUpdate(
        { id: empolyeeId },
        req.body,
        {
          new: true,
        }
      );
  
      if (updatedProjectEmpolyee) {
        res.json({
          message: "empolyee in Project updated successfully",
          updatedProjectEmpolyee,
        });
      } else {
        res.json({
          message: "empolyee in Project not found",
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