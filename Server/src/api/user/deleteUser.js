const express = require("express");
const User = require("../../models/user");

const router = express.Router();

// ... (existing routes)


router.delete("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findOneAndDelete({ _id: id });

    if (deletedUser) {
      res.json({
        message: "User deleted successfully",
      });
    } else {
      res.json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error deleting user",
    });
  }
});

module.exports = router;
