const express = require("express");
const Stock = require("../../models/stock");

const router = express.Router();

router.post("/Stock", async (req, res) => {
    try {
      const { stockId, date, productId, unit, volume, price, } =
        req.body;
  
     
      const existedStock = await stockId.findOne({ id });
      if (existedStock) {
        return res.json({
          message: "Stock Already Exists",
        });
      }
  
    //add to stock
      const newProduct = new Stock({
        stockId,
         date,
          productId, 
          unit,
           volume,
            price,
      });
  
      // Save the new product
      const savedStock = await newStock.save();
  
      res.json({
        message: "Product added successfully",
        Stock: savedStock,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  });
  
  module.exports = router;