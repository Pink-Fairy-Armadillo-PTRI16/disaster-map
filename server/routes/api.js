const express = require('express');
const disasterControl = require('../controllers/disasterControllers');
// const weatherController = require('../controllers/weatherControllers')
const router = express.Router();

router.get('/', (req,res) =>{
    console.log('response from default default get api router');
    res.status(200).json({});
})

router.get('/nasa', disasterControl.getNASA,  (req,res)=>{
    console.log('response from get nasa route in api router');
    //res.locals.events is an array of objects
            //in that object we want: 
                //catagories.title, 
                //geometries is an array of objects, iterate through geometries to find:
                    //geometries[i].coordinates
    res.status(200).json(res.locals.events);
})

router.get('/mongo', disasterControl.getData, (req,res)=>{
    console.log('response from get mongo in api router');
    res.status(200).json(res.locals.events);
})

router.get('/quake', disasterControl.getQuake, (req, res) =>{
    console.log('response from get quake in api router');
    res.status(200).json(res.locals.events);
})

router.get('/mongo/quake', disasterControl.getQuakeData, (req,res)=>{
    console.log('response from get mongo/quake in api router');
    res.status(200).json(res.locals.events);
})

// router.get('/weather', weatherController.getRelatedSevereWeatherEvents, (req, res)=>{
//     console.log('response from get mongo in api router');
//     res.status(200).json(res.locals.events);
// })

module.exports = router;