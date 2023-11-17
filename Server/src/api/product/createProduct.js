const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.post("/product", async (req, res) => {
  const { name, unit, vloume, price, date, detail, picture, projectId } =
    req.body;
  const existedProduct = await Product.findOne({ where: { name } }).catch(
    (err) => console.log(err)
  );
  if (existedProduct) {
    return res.json({
      message: "Product Already Exists",
    });
  }
  const newProduct = new Product({
    name,
    unit,
    vloume,
    price,
    date,
    detail,
    picture,
    projectId,
  });
  const savedProduct = await newProduct.save().catch((err) => {
    console.log(err);
    res.json({ error: "can not add product" });
  });
  if (savedProduct) {
    res.json({
      message: "works",
    });
  }
});

module.exports = router;
