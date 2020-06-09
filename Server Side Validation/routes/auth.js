const express = require('express');
const { check, body } = require('express-validator/check');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post('/signup',
    [check('email')
        .isEmail()
        .withMessage('Please Enter a Valid email.')
        .custom((value, { req }) => {
            if (value == 'test11@test.com') {
                throw new Error('Forbbiden Email');
            }
            return true;
        }),
    body('password', 'Please enter a valid password with length 5 and no alphanumeric characters.')
        .isLength({ min: 5 })
        .isAlphanumeric(),
    body('confirmpassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords should match.')
        }
        return true;
    })
    ]
    , authController.postSignup);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;
