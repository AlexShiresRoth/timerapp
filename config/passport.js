const passport = require('passport');

const User = require('../models/user');

//signup logic 
exports.signUp = (req,res,next) => {
    req.body.username;
    req.body.password;

    console.log(req.body.username)
    let newUser = new User({ username: req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            console.log(err);
            req.flash('error', err.message)
            return res.redirect('/')
        }
        passport.authenticate('local')(req, res, () => {
            req.flash('success', `Thanks for signing up ${req.user.username}!`)
            res.redirect('/timer');
        });
    });
}

exports.login = (req,res,next) => {
    req.flash('success', `Welcome back to TimerApp ${req.user.username}.`)
};

exports.authenticateLogin = passport.authenticate('local',{
    successRedirect: '/timer',
    failureRedirect: '/login',
    failureFlash: 'Incorrect username or password'
});

exports.logout = (req,res,next) => {
    req.logout();
    req.flash('success','Successfully logged out.');
    res.redirect('/login');
}

module.exports = exports;