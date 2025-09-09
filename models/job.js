const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	salary: {
		type: Number,
		required: false,
	},
	type: {
		type: String,
		enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
		default: 'Full-time',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	// Add more fields as needed
});

module.exports = mongoose.models.Job || mongoose.model('Job', JobSchema);
