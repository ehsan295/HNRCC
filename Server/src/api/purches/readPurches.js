const express = require("express");
const Purches = require("../../models/purches");

const router = express.Router();

router.get("/purches", async (req, res) => {
    try {
      const purches = await Purches.find();
      res.json({
        purches,
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