const express = require("express");
const RoomParticipant = require("../../models/roompaticipant");

const router = express.Router();

router.delete("/roompaticipant/:id", async (req, res) => {
    const roomId = req.params.id;
  
    try {
      const deletedRoomPaticipant = await RoomParticipant.findOneAndDelete({ _id: roomId });
  
      if (deletedRoomPaticipant) {
        res.json({
          message: "the user participant in this room deleted successfully",
        });
      } else {
        res.json({
          message: "user is not  not found in this room",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Error deleting room participant",
      });
    }
  });
  
  module.exports = router;
  