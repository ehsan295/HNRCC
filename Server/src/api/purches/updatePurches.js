const express = require("express");
const Purches = require("../../models/purches");

const router = express.Router();

router.put("/purches/:id", async (req, res) => {
    const purchesId = req.params.id;
  
    try {
      const updatedPurches = await Purches.findOneAndUpdate(
        { id: purchesId },
        req.body,
        {
          new: true,
        }
      );
  
      if (updatedPurches) {
        res.json({
          message: "Purches updated successfully",
          updatedPurches,
        });
      } else {
        res.json({
          message: "Purches not found",
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