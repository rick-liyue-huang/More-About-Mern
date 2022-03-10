const express = require('express');
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middlewares/verifyToken');
const CartModel = require('../models/Cart');


const router = express.Router();

router.post('/', verifyToken, async (req, res) => {

	const newCart = new CartModel(req.body);

	try {
		const savedCart = await newCart.save();
		res.status(200).json(savedCart);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {

	try {
		const updateCart = await CartModel.findByIdAndUpdate(req.params.id, {
			$set: req.body
		}, {new: true});
		res.status(200).json(updateCart);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
	try {
		await CartModel.findByIdAndDelete(req.params.id);
		res.status(200).json('cart is deleted');

	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/find/:userId', verifyTokenAndAdmin, async (req, res) => {
	try {
		const cart = await CartModel.findOne({
			userId: req.params.userId
		})
		res.status(200).json(cart);

	} catch (err) {
		res.status(500).json(err);
	}
});

// get all cart goods
router.get('/', verifyTokenAndAdmin, async (req, res) => {
	try {
		const carts = await CartModel.find();
		res.status(200).json(carts);

	} catch (err) {
		res.status(500).json(err);
	}
})


module.exports = router;
