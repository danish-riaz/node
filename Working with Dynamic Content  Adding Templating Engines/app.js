const express = require('express');
const bodyParse = require('body-parser');
const path = require('path');

const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoute);

// '/' is the default route if not specified
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

