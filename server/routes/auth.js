
const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');
const CrypoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// signup
router.post('/signup', async (req, res) => {
	const newUser = new UserModel({
		username: req.body.username,
		email: req.body.email,
		password: CrypoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString()
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

// signin
router.post('/signin', async (req, res) => {

	try {
		const user = await UserModel.findOne({
			username: req.body.username
		});

		if (!user) {
			return res.status(401).json('wrong user')
		}
		const hashPassword = CrypoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET);

		const originPassword = hashPassword.toString(CrypoJS.enc.Utf8);

		if (originPassword !== req.body.password) {
			return res.status(401).json('wrong password');
		}

		// here user is already signin
		// so we need jwt
		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
				process.env.JWT_SECRET_KEY,
			{
				expiresIn: '3d'
			}
		)

		// notice here for mongodb constructor
		const {password, ...others} = user._doc;

		res.status(200).json({others, accessToken});

	} catch (err) {
		res.status(500).json(err)
	}

})

module.exports = router;
