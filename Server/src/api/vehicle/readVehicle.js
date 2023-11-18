const express = require("express");
const Vehicle = require("../../models/vehicle");

const router = express.Router();
router.get("/vehicle", async (req, res) => {
    try {
      const vehicles = await Vehicle.find();
      res.json({
        vehicles,
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