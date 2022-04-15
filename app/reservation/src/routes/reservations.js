// Express router

const router = require('express').Router();

// Routes
router.get('/', (req, res) => {
	res.json({msg: 'Hello world'})
});

module.exports = router;