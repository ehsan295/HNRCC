const express = require("express");
const Product = require("../models/Product");

const router = express.Router();
// Update a product by ID
router.put("/product/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { id: productId },
      req.body,
      {
        new: true,
      }
    );

    if (updatedProduct) {
      res.json({
        message: "Product updated successfully",
        updatedProduct,
      });
    } else {
      res.json({
        message: "Product not found",
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
