const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');

/* GET home page. */
router.get('/', (req, res, next) => {
      res.render('login',{title: 'TimerApp'});
});

module.exports = router;
