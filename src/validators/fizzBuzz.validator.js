var errors = require('../responses/standardErrors');

function isInteger(input, property) {
    if (!Number.isInteger(input)) {
        console.log('if condition', input);
        throw new errors.BadRequestError('Specified property should be integer', property);
    }
    return true;
}

module.exports = {
    isInteger: isInteger,
}