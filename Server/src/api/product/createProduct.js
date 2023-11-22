const express = require("express");
const Product = require("../../models/product");

const router = express.Router();

// Create a new product
router.post("/product", async (req, res) => {
  try {
    const { name, unit, volume, price, date, detail, picture } = req.body;

    // Check if the product with the given ID already exists
    const existedProduct = await Product.findOne({ name });
    if (existedProduct) {
      return res.json({
        message: "Product Already Exists",
      });
    }

    // Create a new product
    const newProduct = new Product({
      name,
      unit,
      volume,
      price,
      date,
      detail,
      picture,
    });

    // Save the new product
    const savedProduct = await newProduct.save();

    res.json({
      message: "Product added successfully",
      product: savedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
