const express = require('express');
const bodyParse = require('body-parser');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));

app.use('/admin', adminRoute);
app.use(shopRoute);

// '/' is the default route if not specified
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);

