const mongoose = require('mongoose')

// https://eonet.gsfc.nasa.gov/docs/v2.1
const nasaEvent = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: false},
    link: {type: String, required: true},
    categories: {type: [{
        id: {type: Number, required: true},
        title: {type: String, required: true}
    }], required: true}, // https://eonet.gsfc.nasa.gov/api/v2.1/categories
    sources: {type: [{
        id: {type: String, required: true},
        url: {type: String, required: true}
    }], required: true}, // https://eonet.gsfc.nasa.gov/api/v2.1/sources
    geometries: {type: [{
        date: {type: Date, required: true},
        type: {type: String, required: true},
        coordinates: {type: [Number], required: true}
    }], required: true}, // https://geojson.org/
    closed: {type: Date, required: false}
})

module.exports = mongoose.model('nasaEvent', nasaEvent);