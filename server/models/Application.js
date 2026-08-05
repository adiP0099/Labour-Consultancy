const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  resume: { type: String, default: '' },
  coverLetter: { type: String, default: '' },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  appliedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
