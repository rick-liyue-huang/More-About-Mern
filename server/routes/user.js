
const express = require('express');
const {verifyTokenAndAuthorization} = require("../middlewares/verifyToken");
const CrypoJS = require("crypto-js");
const UserModel = require('../models/User')


const router = express.Router();


router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {

	if (req.body.password) {
		req.body.password = CrypoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString();
	}

	try {
		const updateUser = await UserModel.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{new: true}
		);
		res.status(200).json(updateUser);

	} catch (err) {
		res.status(500).json(err);
	}
})


module.exports = router
