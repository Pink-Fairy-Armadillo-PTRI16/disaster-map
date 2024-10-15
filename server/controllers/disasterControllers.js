const nasaEvent = require('../models/nasaEvent');

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
    res.locals.events = await nasaEvent.find({}).limit(100);
    return next()
}

module.exports = disasterControl;