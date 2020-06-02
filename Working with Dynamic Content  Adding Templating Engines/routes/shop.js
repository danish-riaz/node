const express = require('express');
const path = require('path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log('[Shop.js]', adminData.products);
    res.render('shop',
        {
            pageTitle: 'Products',
            prods: adminData.products,
            path: '/'
        })
});

module.exports = router;