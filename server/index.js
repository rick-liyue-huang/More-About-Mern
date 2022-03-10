
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');

// let server recognise the .env file
dotenv.config();

const mongoDBURL = process.env.MONGODB_URL;

mongoose.connect(mongoDBURL)
	.then(() => {
		console.log('MongoDB is connected...')
	})
	.catch(err => {
		console.error('something wrong about MongoDB connection: ', err);
	})

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/orders', orderRouter);

app.listen(PORT || 3500, () => {
	console.log(`this server is running on port of ${PORT}`);
});
