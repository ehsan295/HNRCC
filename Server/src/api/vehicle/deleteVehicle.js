const express = require("express");
const Vehicle = require("../../models/vehicle");

const router = express.Router();
router.delete("/vehicle/:vehicleId", async (req, res) => {
    const vehicleId = req.params.vehicleId;
  
    try {
      const deletedVehicle = await Vehicle.findOneAndDelete({ _id: vehicleId });
  
      if (deletedVehicle) {
        res.json({
          message: "vehicle deleted successfully",
        });
      } else {
        res.json({
          message: "vehicle not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Error deleting vehicle",
      });
    }
  });
  
  module.exports = router;