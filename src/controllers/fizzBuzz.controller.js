var fizzBuzzService = require('../services/fizzBuzz.service');
var validator = require('../validators/fizzBuzz.validator');
var errors = require('../responses/standardErrors');

function getFizzBuzz(req, res) {
    try {
        const count = parseInt(req.params.count, 10);
        validator.isInteger(count, 'count');
        const fizzBuzzPattern = fizzBuzzService.getFizzBuzzPattern(count);
        res.json({ data: fizzBuzzPattern });
    }
    catch (error) {
        console.log('erorrsss', error);
        res.status(error.statusCode).json({ code: error.statusCode, message: error.message, property: error.property });
    }
}

module.exports = {
    getFizzBuzz: getFizzBuzz,
}