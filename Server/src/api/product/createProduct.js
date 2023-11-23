const express = require("express");
const ProjectModel = require("../../models/project");
const ProductModel = require("../../models/product");

const router = express.Router();

// Create a new product
router.post("/product", async (req, res) => {
  try {
    // Move the declaration and initialization of projectId before using it
    const { name, unit, volume, price, date, detail, projectId } = req.body;

    // Check if the product with the given name already exists
    const existedProduct = await ProductModel.findOne({ where: { name } });
    if (existedProduct) {
      return res.json({
        message: "Product Already Exists",
      });
    }

    // Create a new product
    const newProduct = new ProductModel({
      name,
      unit,
      volume,
      price,
      date,
      detail,
      projectId,
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
