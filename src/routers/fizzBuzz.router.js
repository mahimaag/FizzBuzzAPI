var express = require('express');
var  fizzBuzzController = require('../controllers/fizzBuzz.controller');

const router = express.Router();

/* GET users listing. */
router.get('/:count', fizzBuzzController.getFizzBuzz);

module.exports = router;