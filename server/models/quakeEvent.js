const mongoose = require('mongoose');

const quakeEvent = new mongoose.Schema({
    id:{type: String, required: true},
    title: {type: String, required: true},
    date: {type: Number, required: true},
    url: {type: String, required: true},
    coordinates:{type:[Number], required: true},
    magnitude:{type: Number, required: true},
    })

module.exports =  mongoose.model('quakeEvent', quakeEvent);
