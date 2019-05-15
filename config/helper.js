const express = require('express');
const router = express.Router();

exports.getSignUp = (req, res, next) => {
    res.render('index',{
       title: 'TimerApp'
    });
}

exports.isSignedUp = (req, res, next) => {
    res.render('timer', { 
        title: 'TimerApp'
    }) 
 };

 module.exports = exports;