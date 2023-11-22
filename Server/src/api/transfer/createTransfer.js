const express = require("express");
const Transfer = require("../../models/transfer");

const router = express.Router();


router.post("/transfer", async (req, res) => {
  try {
    const {transferId, vehicleId, date, orderId,detail,lodingPosition,dischargePosition,phone,rent } =
      req.body;

    // Check if the projectt with the given ID already exists
    const existedTranfer = await Transfer.findOne({ transferId });
    if (existedTranfer) {
      return res.json({
        message: "transfer data Already Exists",
      });
    }

    // Create a new project
    const newTransfer = new Transfer({
        transferId, 
        vehicleId,
         date,
          orderId,
          detail,
          lodingPosition,
          dischargePosition,
          phone,
          rent

    });

   
    const savedTransfer = await newTransfer.save();

    res.json({
      message: "Transfer data added successfully",
      transfer: savedTransfer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
