const express = require("express");
const Stock = require("../../models/stock");
const router = express.Router();

// ... (existing routes)

// Read all stock product
router.get("/stock", async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json({
      stocks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

// ... (existing routes)

module.exports = router;
