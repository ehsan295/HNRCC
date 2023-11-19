const express = require("express");
const User= require("../../models/user");

const router = express.Router();

// Create a new user
router.post("/user", async (req, res) => {
  try {
    const { id ,name, email, password,  } =
      req.body;

    // Check if the user with the given ID already exists
    const existedUser = await User.findOne({ id });
    if (existedUser) {
      return res.json({
        message: "User Already Exists",
      });
    }

    // Create a new user
    const newUser = new User({
        id ,name, email, password,
    });

    // Save the new product
    const savedUser = await newUser.save();

    res.json({
      message: "User added successfully",
      user: savedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
