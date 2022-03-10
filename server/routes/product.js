const express = require('express');
const {verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken} = require('../middlewares/verifyToken');
const ProductModel = require('../models/Product');


const router = express.Router();

// create product
router.post('/', verifyTokenAndAdmin, async (req, res) => {

	const newProduct = new ProductModel(req.body);

	try {
		const savedProduct = await newProduct.save();
		res.status(200).json(savedProduct);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const updateProduct = await ProductModel.findByIdAndUpdate(req.params.id, {
			$set: req.body
		}, {new: true});
		res.status(200).json(updateProduct);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		await ProductModel.findByIdAndDelete(req.params.id);
		res.status(200).json('product is deleted already')
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/find/:id', async (req, res) => {
	try {
		const product = await ProductModel.findById(req.params.id);
		res.status(200).json(product);

	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/', async (req, res) => {
	const qNew = req.query.new;
	const qCategory = req.query.category

	try {
		let products;

		if (qNew) {
			products = await ProductModel.find().sort({createdAt: -1}).limit(1);
		} else if(qCategory) {
			products = await ProductModel.find({categories: {
				$in: [qCategory]
				}
			})
		} else {
			products = await ProductModel.find();
		}

		res.status(200).json(products);

	} catch (err) {
		res.status(500).json(err);
	}
})


module.exports = router
