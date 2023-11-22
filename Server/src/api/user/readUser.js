const express = require("express");
const User = require("../../models/user");
const router = express.Router();

// ... (existing routes)

// Read all products
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      users,
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
