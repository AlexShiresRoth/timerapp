const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'userName[userName]',
},(userName) => {
    User.findOne({ userName })
        .then(user => {
            if(!user){
                return done(null,false, {errors : { 'username' : 'is invalid '} });
            }

            return done(null,user);
        }).catch(done);
}));