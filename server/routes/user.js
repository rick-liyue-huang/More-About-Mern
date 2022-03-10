
const express = require('express');
const {verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../middlewares/verifyToken");
const CrypoJS = require("crypto-js");
const UserModel = require('../models/User')


const router = express.Router();

// update user information
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
});

router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {

	try {
		await UserModel.findByIdAndDelete(req.params.id);
		res.status(200).json('User has deleted...')
	} catch (err) {
		res.status(500).json(err);
	}
});

// query the single user
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id);

		const {password, ...others} = user._doc;

		res.status(200).json(others);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/', verifyTokenAndAdmin, async (req, res) => {

	const query = req.query.new;
	try {
		const users = query ?
			await UserModel.find().sort({_id: -1}).limit(1) :
			await UserModel.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	}
});


// get user status
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

	try {
		const data = await UserModel.aggregate([
			{$match: {createdAt: {$gte: lastYear}}},
			{
				$project: {
					month: {$month: '$createdAt'}
				}
			},
			{
				$group: {
					_id: '$month',
					total: {$sum: 1}
				}
			}
		]);
		res.status(200).json(data);

	} catch (err) {
		res.status(500).json(err);
	}
});



module.exports = router
