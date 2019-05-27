const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');

//models
const User = require('./models/user')

const indexRouter = require('./routes/index');
const timersRouter = require('./routes/timers');

const app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

//mongoose setup
const dbpassword = process.env.DBPASSWORD;
const dbuser = process.env.DBUSER;

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/timer-api' || `mongodb://${dbuser}:${dbpassword}@ds019936.mlab.com:19936/timerapp`, {useNewUrlParser: true});

mongoose.Promise = Promise;


//express session setup
app.use(require('express-session')({
  secret:'Snacky',
  resave:false,
  saveUninitialized: false
}));

//passport config
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());


app.use((req,res,next) => {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
})

app.use('/', indexRouter);
app.use('/api/timers', timersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
