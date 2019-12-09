var express = require('express');
var fizzBuzzRoute = require('./routers/fizzBuzz.router');

const app = express();
app.use('/fizzbuzz', fizzBuzzRoute);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})