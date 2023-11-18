const express = require("express");
const Stock = require("../../models/stock");

const router = express.Router();

// ... (existing routes)

// Delete a project by ID
router.delete("/Stock/:stocktId", async (req, res) => {
  const stockId = req.params.stocktId;

  try {
    const deletedStock = await Stock.findOneAndDelete({ _id: stockId });

    if (deletedStock) {
      res.json({
        message: "stock product deleted successfully",
      });
    } else {
      res.json({
        message: "stock product not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error deleting stock product",
    });
  }
});

module.exports = router;
