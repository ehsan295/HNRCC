const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/product/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findOne({ id: productId });

    if (product) {
      res.json({
        product,
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
