const express = require("express");
const Transfer = require("../../models/transfer");
const router = express.Router();


router.get("/transfers", async (req, res) => {
  try {
    const transfers = await Transfer.find();
    res.json({
      transfers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});



module.exports = router;