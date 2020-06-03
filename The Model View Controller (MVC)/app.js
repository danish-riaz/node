const express = require('express');
const bodyParse = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// '/' is the default route if not specified
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
});

app.listen(3000);

