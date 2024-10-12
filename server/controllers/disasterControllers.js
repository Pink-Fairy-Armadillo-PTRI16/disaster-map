const nasaEvent = require('/Users/lionarmor/disaster-map/server/models/nasaEvent.js');

const disasterControl = {};

disasterControl.getNASA = (req,res,next) =>{
    console.log('message from disasterControl.getNASA');

    res.locals.events = res.locals.events || [];

    fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
        .then(response => response.json())
        .then(data => {
            for (const event of data.events) {
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
            return next();
        })
    
} 

disasterControl.getData = async (req,res, next)=>{
    console.log('message from disasterControl.getData');
    res.locals.events = await nasaEvent.find({});
    return next()
}

module.exports = disasterControl;