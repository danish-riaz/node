const http = require('http');
const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('Inside second Middleware !');
    res.send('<h1>ADD PAGE</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Inside second Middleware !');
    res.send('<h1>Hello From Express</h1>');
});

app.listen(3000, () => {
    console.log('Server Running at locathost 3000');
})

