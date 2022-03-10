
const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');

// signup
router.post('/signup', async (req, res) => {
	const newUser = new UserModel({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});

	try {
		const saveUser = await newUser.save();
		// console.log(saveUser);
		res.status(201).json(saveUser)
	} catch (err) {
		console.error('saveUser has problems: ', err);
		res.status(500).json(err);
	}

})

module.exports = router;
