const express = require('express');
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middlewares/verifyToken');
const OrderModel = require('../models/Order');
const UserModel = require("../models/User");


const router = express.Router();

router.post('/', verifyToken, async (req, res) => {

	const newOrder = new OrderModel(req.body);

	try {
		const savedCart = await newOrder.save();
		res.status(200).json(savedCart);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {

	try {
		const updateOrder = await OrderModel.findByIdAndUpdate(req.params.id, {
			$set: req.body
		}, {new: true});
		res.status(200).json(updateOrder);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		await OrderModel.findByIdAndDelete(req.params.id);
		res.status(200).json('cart is deleted');

	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/find/:userId', verifyTokenAndAdmin, async (req, res) => {
	try {
		const orders = await OrderModel.find({
			userId: req.params.userId
		})
		res.status(200).json(orders);

	} catch (err) {
		res.status(500).json(err);
	}
});

// get all cart goods
router.get('/', verifyTokenAndAdmin, async (req, res) => {
	try {
		const orders = await OrderModel.find();
		res.status(200).json(orders);

	} catch (err) {
		res.status(500).json(err);
	}
});

// order status
router.get('/income', verifyTokenAndAdmin, async (req, res) => {

	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

	try {

		const income = await OrderModel.aggregate([
			{
				$match: {
					createdAt: {
						$gte: previousMonth
					}
				}
			},
			{
				$project: {
					month: {$month: '$createdAt'},
					sales: '$amount'
				}
			},
			{
				$group: {
					_id: '$month',
					total: {$sum: '$sales'}
				}
			}
		]);
		res.status(200).json(income);

	} catch (err) {
		res.status(500).json(err);
	}

});



module.exports = router;

