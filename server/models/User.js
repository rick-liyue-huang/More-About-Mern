
const mongoose = require('mongoose');

// create User schema
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	}
})
