const express = require("express");
const Purches = require("../../models/purches");

const router = express.Router();

router.delete("/purches/:purchesId", async (req, res) => {
    const purchesId = req.params.purchesId;
  
    try {
      const deletedPurches = await Purches.findOneAndDelete({ _id: purchesId });
  
      if (deletedPurches) {
        res.json({
          message: "purches deleted successfully",
        });
      } else {
        res.json({
          message: "Purches not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Error deleting purches",
      });
    }
  });
  
  module.exports = router;