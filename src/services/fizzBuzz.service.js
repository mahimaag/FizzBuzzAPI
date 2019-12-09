function getFizzBuzzPattern(count) {
    let output;
    const fizzBuzzPattern = [];
    for (let i = 1; i <= count; i++) {
        output = '';
        if (i % 3 === 0) {
            output += 'Fizz';
        }
        if (i % 5 === 0) {
            output += 'Buzz';
        }
        if (output === '') {
            output += i;
        }
        console.log(output);
        fizzBuzzPattern.push(output);
    }
    return fizzBuzzPattern;
}

module.exports = {
    getFizzBuzzPattern: getFizzBuzzPattern,
};