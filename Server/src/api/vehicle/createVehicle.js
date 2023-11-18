const express = require("express");
const Vehicle = require("../../models/vehicle");

const router = express.Router();


router.post("/vehicle", async (req, res) => {
  try {
    const { vehicleId, driver, plate, projectId } =
      req.body;

   
    const existedVehicle = await Vehicle.findOne({ vehicleId });
    if (existedVehicle) {
      return res.json({
        message: "this vehicle Already Exists",
      });
    }

    // Create a new project
    const newVehicle = new Vehicle({
        vehicleId,
         driver,
          plate,
           projectId 
    });

    // Save the new vehicle
    const savedVehicle = await newVehicle.save();

    res.json({
      message: "vehicle added successfully",
      vehicle: savedVehicle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
