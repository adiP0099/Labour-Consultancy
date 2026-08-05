const express = require('express');
const Job = require('../models/Job');
const { protect, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, async (req, res) => {
  const jobs = await Job.find().populate('employerId', 'name email');
  res.json(jobs);
});

router.post('/', protect, authorizeRoles('employer', 'admin'), async (req, res) => {
  const job = await Job.create({ ...req.body, employerId: req.user._id });
  res.status(201).json(job);
});

router.put('/:id', protect, authorizeRoles('employer', 'admin'), async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: 'Job not found' });
  if (req.user.role !== 'admin' && job.employerId.toString() !== req.user._id.toString()) return res.status(403).json({ message: 'Forbidden' });
  const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', protect, authorizeRoles('employer', 'admin'), async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: 'Job deleted' });
});

module.exports = router;
