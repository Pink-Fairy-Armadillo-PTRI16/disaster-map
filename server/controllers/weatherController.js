const fetch = require('node-fetch');

const weatherController = {};

weatherController.getRelatedSevereWeatherEvents = async (req, res, next) => {
    const events = res.locals.events;
    const apiKey = '98c5d6565534c818b60515fba1cba44d';

    try {
        for (const event of events) {
            // Get the first geometry (assuming it's the most relevant)
            const geometry = event.geometries[0];
            console.log("GEOMETRY", geometry)
            const [lon, lat] = geometry.coordinates;
            console.log("LON", lon)
            console.log("LAT", lat)
            const timestamp = Math.floor(new Date(geometry.date).getTime() / 1000);
            console.log("TIMESTAMP", timestamp)
            const url = `https://api.openweathermap.org/data/3.0/onecall/timemachine?appid=${apiKey}&lat=${lat}&lon=${lon}&dt=${timestamp}`;

            const response = await fetch(url);
            const weatherData = await response.json();
            console.log("WEATHERDATA", weatherData)
            // Add weather data to the event
            event.weatherData = weatherData;
        }

        next();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};

module.exports = weatherController;
