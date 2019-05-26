
const express = require('express');
const router = express.Router();
const authHelper = require('../config/passport');
const helper = require('../config/helper');

/* GET home page. */
router.get('/', helper.getSignUp);

//signup route////////////////////////////
router.post('/signup', authHelper.signUp);

router.get('/timer', helper.isSignedUp);

//login route/////////////////////////////

router.get('/login', helper.loginPage);

router.post('/login',authHelper.authenticateLogin, authHelper.login);

//logout routes//////////////////////////////////////////////
router.get('/logout', authHelper.logout);

module.exports = router;
