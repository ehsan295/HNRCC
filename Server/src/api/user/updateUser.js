const express = require("express");
const User = require("../../models/user");
const router = express.Router();
// Update a user by ID
router.put("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { id: id },
      req.body,
      {
        new: true,
      }
    );

    if (updatedUser) {
      res.json({
        message: "user updated successfully",
        updatedUser,
      });
    } else {
      res.json({
        message: "user not found",
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
