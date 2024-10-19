const nasaEvent = require('../models/nasaEvent.js');
const quakeEvent = require('../models/quakeEvent.js');

const disasterControl = {};

disasterControl.getNASA = async (req,res,next) =>{
    console.log('message from disasterControl.getNASA');

    res.locals.events = res.locals.events || [];

    const response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=9999999999999999999&days=999999999999999');
    const data = await response.json();

    for (const event of data.events) {
        const existingEvent = await nasaEvent.findOne({ id: event.id });

        if (!existingEvent) {
            const newNASA = new nasaEvent({
                id: event.id,
                title: event.title,
                description: event.description,
                link: event.link,
                categories: event.categories,
                sources: event.sources,
                geometries: event.geometries,
                close: event.close
            })
            newNASA.save()
            res.locals.events.push(newNASA)
        }
    }
    
    return next();
} 

disasterControl.getData = async (req,res, next)=>{
    console.log('message from disasterControl.getData');
    console.log('filtersFromFrontEnd:', req.query.filters);
    const filters = req.query.filters ? req.query.filters.split(',') : [];
    console.log('SPLIT FILTERS',filters)
    // res.locals.events = await nasaEvent.find({}).limit(Number(req.query.limit));
    res.locals.events = await nasaEvent.find({
        "categories" : {
            $elemMatch : {
                "title" : { $in : filters }
            }
        }
    }).limit(Number(req.query.limit));
    return next()
}

disasterControl.getParameterizedData = async (req, res, next)=>{
    console.log('message from disasterControl.getParameterizedData');
    // const { categories } = req.params.filters;
    res.locals.events = await nasaEvent.find({"categories": [{ $in : req.params.filters }]
    }).limit(req.params.limit);
    return next()
}

disasterControl.getQuake = async (req, res, next)=>{
    console.log('message from getQuakeData in disasterController');
    
    res.locals.events = res.locals.events || [];

    const response = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2024-10-16&endtime=2024-10-17');
    const data = await response.json();

    for (const event of data.features) {
        const existingEvent = await quakeEvent.findOne({ id: event.id });

        if (!existingEvent) {
            const newQuake = new quakeEvent({
                id: event.id,
                title: event.properties.title,
                date: event.properties.time,
                url: event.properties.url,
                coordinates: event.geometry.coordinates,
                magnitude: event.properties.mag,
            })
            newQuake.save();
            res.locals.events.push(newQuake);
        }
    }

    return next();
}

disasterControl.getQuakeData = async (req,res, next)=>{
    console.log('message from disasterControl.getQuakeData');
    // res.locals.events = await nasaEvent.find({}).limit(Number(req.query.limit));
    res.locals.events = await quakeEvent.find({}).limit(Number(req.query.limit));
    return next()
}

module.exports = disasterControl;
