const express = require('express');
const router = express.Router();
const Timer = require('../models/timer');



router.get('/', (req, res) => {
    Timer.find()
        .then((timers) => {
            res.json(timers)
        })
        .catch(err => {
            console.log(err);
        });
});

router.post('/', (req,res) => {
    Timer.create(req.body)
        .then(newTimer => {
            newTimer.time = req.body.time,
            newTimer.name = req.body.name
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;