const mongoose = require('mongoose');

const workerProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  profileImage: { type: String, default: '' },
  fullName: { type: String, default: '' },
  age: { type: Number, default: 0 },
  gender: { type: String, default: '' },
  education: { type: String, default: '' },
  skills: [{ type: String }],
  experience: { type: String, default: '' },
  expectedSalary: { type: String, default: '' },
  location: { type: String, default: '' },
  availability: { type: Boolean, default: true },
  resume: { type: String, default: '' },
  certificates: [{ type: String }],
  about: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WorkerProfile', workerProfileSchema);
