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
            return res.redirect('/')
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/timer');
        })
    })
}

module.exports = exports;