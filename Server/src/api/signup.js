const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existedUser = await User.findOne({ where: { email } });

    if (existedUser) {
      return res.json({
        message: 'User Already Exists'
      });
    }

    // Create a new user
    const newUser = new User({ name, email, password });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Respond to the client
    res.json({
      message: 'Signup successful',
      user: savedUser // You might want to send some user details back
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
