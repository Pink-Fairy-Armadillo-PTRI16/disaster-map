import nasaEvent from './models/nasaEvent.js';

const disasterControl = {};

disasterControl.getNASA = (req,res,next) =>{
    console.log('message from disasterControl.getNASA');
    fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
        .then(response => response.json())
        .then(data => {
            for (event of data.events) {
                const nasaEvent = new nasaModel({
                    id: event.id,
                    title: event.title,
                    description: event.description,
                    link: event.link,
                    categories: event.categories,
                    sources: event.sources,
                    geometries: event.geometries,
                    close: event.close
                })

                nasaEvent.save()
            }
            return next();
        })
    
} 

export default disasterControl;