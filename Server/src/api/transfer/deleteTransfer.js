const express = require("express");
const Transfer = require("../../models/transfer");
const router = express.Router();

router.delete("/transfer/:transferId", async (req, res) => {
    const transferId = req.params.transferId;
  
    try {
      const deletedTransfer = await Transfer.findOneAndDelete({ _id: transferId });
  
      if (deletedTransfer) {
        res.json({
          message: "transfer data deleted successfully",
        });
      } else {
        res.json({
          message: "transfer data not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Error deleting trsnsfer data",
      });
    }
  });
  
  module.exports = router;