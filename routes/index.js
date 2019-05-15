
const express = require('express');
const router = express.Router();
const authHelper = require('../config/passport');
const helper = require('../config/helper');

/* GET home page. */
router.get('/', helper.getSignUp);

router.post('/signup', authHelper.signUp);

router.get('/timer', helper.isSignedUp);



module.exports = router;
