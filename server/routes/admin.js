const express = require('express');
const { protect, authorizeRoles } = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.get('/users', protect, authorizeRoles('admin'), async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.put('/users/:id', protect, authorizeRoles('admin'), async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
  res.json(user);
});

router.delete('/users/:id', protect, authorizeRoles('admin'), async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

module.exports = router;
