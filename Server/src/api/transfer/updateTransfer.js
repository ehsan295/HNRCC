const express = require("express");
const Transfer = require("../../models/transfer");
const router = express.Router();

router.put("/transfer/:id", async (req, res) => {
  const transferId = req.params.id;

  try {
    const updatedTransfer = await Transfer.findOneAndUpdate(
      { id: transferId },
      req.body,
      {
        new: true,
      }
    );

    if (updatedTransfer) {
      res.json({
        message: "transfer updated successfully",
        updatedTransfer,
      });
    } else {
      res.json({
        message: "transfer data not found",
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
