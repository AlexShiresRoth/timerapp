const mongoose = require('mongoose');


const TimerSchema = new mongoose.Schema({
    time: String,
    name: String
});

const Timer = mongoose.model('Timer',TimerSchema);

module.exports = Timer;
