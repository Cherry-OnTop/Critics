const router = require('express').Router();
const controller = require('../controllers/controllers.js');

router.get('/:number', controller.getReviews);

module.exports = router;