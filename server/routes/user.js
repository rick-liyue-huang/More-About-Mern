
const express = require('express');
const router = express.Router();

router.get('/userTest', (req, res) => {
	res.send('user test is successful');
});

router.post('/userPostTest', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	res.json({username, password})
})


module.exports = router
