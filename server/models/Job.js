const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  category: { type: String, default: '' },
  salary: { type: String, default: '' },
  experience: { type: String, default: '' },
  skillsRequired: [{ type: String }],
  location: { type: String, default: '' },
  vacancies: { type: Number, default: 1 },
  employmentType: { type: String, default: 'Full Time' },
  deadline: { type: Date, default: null },
  status: { type: String, enum: ['active', 'closed', 'draft'], default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
