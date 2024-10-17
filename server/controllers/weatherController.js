const fetch = require('node-fetch');

const weatherController = {};

weatherController.getRelatedWeatherForNasaEvent = async (req, res, next) => {
  try {
    const apiKey = 'cfc083dfcb9e4a8a9a002913241710';
    const events = res.locals.events;

    const requests = events.map(event => {
      const geometry = event.geometries[0];
      const [lon, lat] = geometry.coordinates;
      const date = geometry.date.toISOString().split('T')[0];
      console.log("DATE", date)
      console.log("LAT", lat, "LON", lon)
      return {
        q : `${lat},${lon}`,
        dt : date
      };
    });

    const batchProcess = async (batch, index) => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/history.json?q=${batch.q}&key=${apiKey}&dt=${batch.dt}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const weatherData = await response.json();
        if (weatherData.error) {
          console.error(`Weather API error for index ${index}:`, weatherData.error);
          return { error: weatherData.error, index };
        }
        return { weatherData, index };
      } catch (error) {
        console.error(`Error fetching weather data for index ${index}:`, error);
        return { error, index };
      }
    }

    const weatherDataBatches = await Promise.all(requests.map((request, index) => batchProcess(request, index)));

    res.locals.eventsWithWeather = events.map((event, index) => {
      const matchingWeatherData = weatherDataBatches.find(batch => batch.index === index);
      
      if (matchingWeatherData.error) {
        console.warn(`Skipping weather data for event at index ${index} due to error`);
        return { nasaEvent: event.toObject(), relevantWeather: null} // Return the event without weather data
      }

      const eventWeather = matchingWeatherData.weatherData;
      
      // Extract the correct data from the API response
      const dayData = eventWeather.forecast.forecastday[0];
      const location = eventWeather.location;
      return {
        nasaEvent: event.toObject(),
        relevantWeather: { forecast: dayData, location: location }
      };
    });

    next();
  } catch (error) {
    next({
      log: 'Error in weatherController.getRelatedSevereWeatherEvents',
      status: 500,
      message: { err: 'An error occurred while fetching weather data' },
    });
  }
};

module.exports = weatherController;
