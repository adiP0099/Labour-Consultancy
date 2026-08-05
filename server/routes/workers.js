const express = require('express');
const WorkerProfile = require('../models/WorkerProfile');
const { protect, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, authorizeRoles('admin', 'consultancy', 'worker'), async (req, res) => {
  const profiles = await WorkerProfile.find().populate('userId', 'name email phone role');
  res.json(profiles);
});

router.post('/', protect, authorizeRoles('worker'), async (req, res) => {
  try {
    const profile = await WorkerProfile.create({ ...req.body, userId: req.user._id });
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', protect, authorizeRoles('worker', 'admin', 'consultancy'), async (req, res) => {
  const profile = await WorkerProfile.findById(req.params.id);
  if (!profile) return res.status(404).json({ message: 'Profile not found' });
  if (req.user.role !== 'admin' && profile.userId.toString() !== req.user._id.toString()) return res.status(403).json({ message: 'Forbidden' });
  const updated = await WorkerProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', protect, authorizeRoles('worker', 'admin'), async (req, res) => {
  const profile = await WorkerProfile.findById(req.params.id);
  if (!profile) return res.status(404).json({ message: 'Profile not found' });
  if (req.user.role !== 'admin' && profile.userId.toString() !== req.user._id.toString()) return res.status(403).json({ message: 'Forbidden' });
  await WorkerProfile.findByIdAndDelete(req.params.id);
  res.json({ message: 'Profile deleted' });
});

module.exports = router;
