const express = require("express");
const Vehicle = require("../../models/vehicle");

const router = express.Router();
router.put("/vehicle/:id", async (req, res) => {
    const vehicleId = req.params.id;
  
    try {
      const updatedvehicle = await Vehicle.findOneAndUpdate(
        { id: vehicleId },
        req.body,
        {
          new: true,
        }
      );
  
      if (updatedvehicle) {
        res.json({
          message: "Vehicle updated successfully",
          updatedvehicle,
        });
      } else {
        res.json({
          message: "vehicle not found",
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