function BadRequestError(err, prop) {
    this.statusCode = 400;
    if (err && err.message) {
        this.message = err.message;
        this.stack = err.stack;
    } else {
        this.message = err || 'Bad request';
        this.stack = (new Error()).stack;
    }
    this.property = prop;
}

BadRequestError.prototype = Object.create(Error.prototype);

module.exports = {
    BadRequestError: BadRequestError,
}