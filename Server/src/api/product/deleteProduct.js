const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// ... (existing routes)

// Delete a product by ID
router.delete("/product/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: productId });

    if (deletedProduct) {
      res.json({
        message: "Product deleted successfully",
      });
    } else {
      res.json({
        message: "Product not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error deleting product",
    });
  }
});

module.exports = router;
