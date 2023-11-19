const express = require("express");
const Purches = require("../../models/purches");

const router = express.Router();


router.post("/purches", async (req, res) => {
  try {
    const { purchesId, projectId, empolyeId, name,companyName,unit, price,date,billfile,quantity } =
      req.body;

    // Check if the projectt with the given ID already exists
    const existedPurches = await Purches.findOne({ purchesId });
    if (existedPurches) {
      return res.json({
        message: "Purches Already Exists",
      });
    }

 
    const newPurches = new Purches({
        purchesId, projectId, empolyeId, name,companyName,unit, price,date,billfile,quantity

    });

   
    const savedPurches = await newPurches.save();

    res.json({
      message: "Purches added successfully",
      purches: savedPurches,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
