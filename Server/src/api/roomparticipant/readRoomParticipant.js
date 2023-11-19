const express = require("express");
const RoomParticipant = require("../../models/roompaticipant");

const router = express.Router();

router.get("/roomparticipants", async (req, res) => {
    try {
      const roomparticipants = await RoomParticipant.find();
      res.json({
        roomparticipants,
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