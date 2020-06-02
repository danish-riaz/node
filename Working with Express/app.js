const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    console.log('Inside add-product Middleware !');
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>');
    res.end();
});


app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('Inside / Middleware !');
    res.send('<h1>Hello From Express</h1>');
});

app.listen(3000);

