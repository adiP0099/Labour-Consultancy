const express = require('express');
const Employer = require('../models/Employer');
const { protect, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, authorizeRoles('admin', 'consultancy', 'employer'), async (req, res) => {
  const employers = await Employer.find().populate('userId', 'name email phone role');
  res.json(employers);
});

router.post('/', protect, authorizeRoles('employer'), async (req, res) => {
  const employer = await Employer.create({ ...req.body, userId: req.user._id });
  res.status(201).json(employer);
});

router.put('/:id', protect, authorizeRoles('employer', 'admin', 'consultancy'), async (req, res) => {
  const employer = await Employer.findById(req.params.id);
  if (!employer) return res.status(404).json({ message: 'Employer not found' });
  if (req.user.role !== 'admin' && employer.userId.toString() !== req.user._id.toString()) return res.status(403).json({ message: 'Forbidden' });
  const updated = await Employer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', protect, authorizeRoles('employer', 'admin'), async (req, res) => {
  const employer = await Employer.findById(req.params.id);
  if (!employer) return res.status(404).json({ message: 'Employer not found' });
  if (req.user.role !== 'admin' && employer.userId.toString() !== req.user._id.toString()) return res.status(403).json({ message: 'Forbidden' });
  await Employer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employer deleted' });
});

module.exports = router;
