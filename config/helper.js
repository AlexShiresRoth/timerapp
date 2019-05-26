const express = require('express');
const router = express.Router();

let TimerApp = 'TimerApp';

exports.getSignUp = (req, res, next) => {
    res.render('index',{
       title: TimerApp
    });
}

exports.isSignedUp = (req, res, next) => {
    res.render('timer', { 
        title: TimerApp
    }) 
 };
exports.loginPage = (req,res,next) => {
    res.render('login', {
        title: TimerApp
    });
}
 module.exports = exports;