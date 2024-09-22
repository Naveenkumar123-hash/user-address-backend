const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, street, city, state, zip } = req.body;

  try {
    const user = new User({
      name,
      addresses: [{ street, city, state, zip }]
    });

    await user.save();
    res.status(201).json({ message: 'User and address created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
