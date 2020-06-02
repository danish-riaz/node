const express = require('express');
const bodyParse = require('body-parser');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));

app.use(adminRoute);
app.use(shopRoute);

app.listen(3000);

