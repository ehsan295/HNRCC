const express = require("express");
const Stock = require("../../models/stock");
const router = express.Router();
// Update a project by ID
router.put("/stock/:id", async (req, res) => {
  const stockId = req.params.id;

  try {
    const updatedStock = await Stock.findOneAndUpdate(
      { id: stockId },
      req.body,
      {
        new: true,
      }
    );

    if (updatedStock) {
      res.json({
        message: "Stock  updated successfully",
        updatedStock,
      });
    } else {
      res.json({
        message: "stock product not found",
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
