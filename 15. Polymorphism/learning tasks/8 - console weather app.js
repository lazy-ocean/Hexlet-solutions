/* returnWeather.js
Write a realization of a console weather app. It uses mock-up server with weather in different cities. Example of work:

$ node bin/weather.js berlin
Temperature in berlin: 11C

Server URL = 'http://localhost:8080/api/v2/'
To check the weather in certain city, send GET request to the URL .../api/v2/cities/<city>.
The requested data returns as { "name": "<city name>", temperature: "<number>" }
*/
import axios from "axios";
const apiUrl = "http://localhost:8080/api/v2/";

class WeatherService {
  constructor(city) {
    this.city = city;
  }
  async getWeather() {
    const response = await axios.get(`${apiUrl}cities/${this.city}`);
    return JSON.parse(response.data);
  }
}

const returnWeather = async () => {
  let city = process.argv[2];
  let request = new WeatherService(city);
  let data = await request.getWeather();
  console.log(`Temperature in ${city}: ${data.temperature}C`);
};
