const express = require("express");
const Product = require("../../models/product");
const router = express.Router();

// ... (existing routes)

// Read all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      products,
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
