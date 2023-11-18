const express = require("express");
const RoomParticipant = require("../../models/roompaticipant");

const router = express.Router();


router.post("/roomparticipant", async (req, res) => {
  try {
    const { roomId, userId, } =
      req.body;

    const existedRoomParticipant = await RoomParticipant.findOne({ roomId });
    if (existedRoomParticipant) {
      return res.json({
        message: "room Already Exists",
      });
    }

    const newRoomParticipant = new Product({
     roomId,
     userId,
    });


    const savedRoom = await newRoomParticipant.save();

    res.json({
      message: "Room added successfully",
      roomparticipant: savedRoom,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
