const express = require('express');
const router = express.Router();
const Timer = require('../models/timer');

/* GET home page. */
router.get('/', (req, res, next) => {
  Timer.find()
  .then(timers => {
      res.render('index', { title: timers[0].name });
  })
  .catch(err => {
    console.log(err)
    res.render('index')
  })
  
});



module.exports = router;
