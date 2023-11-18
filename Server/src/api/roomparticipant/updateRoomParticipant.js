const express = require("express");
const RoomParticipant = require("../../models/roompaticipant");

const router = express.Router();

router.put("/roomparticipant/:id", async (req, res) => {
    const roomId = req.params.id;
  
    try {
      const updatedRoomParticipant = await RoomParticipant.findOneAndUpdate(
        { id: roomId },
        req.body,
        {
          new: true,
        }
      );
  
      if (updatedRoomParticipant) {
        res.json({
          message: "room participant updated successfully",
          updatedRoomParticipant,
        });
      } else {
        res.json({
          message: "roomparticipant is not found",
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