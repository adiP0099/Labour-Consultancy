const express = require('express');
const Application = require('../models/Application');
const { protect, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, async (req, res) => {
  const applications = await Application.find().populate('workerId jobId');
  res.json(applications);
});

router.post('/', protect, authorizeRoles('worker'), async (req, res) => {
  const application = await Application.create({ ...req.body, workerId: req.user._id });
  res.status(201).json(application);
});

router.put('/:id', protect, authorizeRoles('employer', 'admin'), async (req, res) => {
  const updated = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', protect, authorizeRoles('worker', 'admin'), async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.json({ message: 'Application deleted' });
});

module.exports = router;
