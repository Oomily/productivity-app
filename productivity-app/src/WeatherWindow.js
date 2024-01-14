import { useState, useEffect } from 'react';
import './WeatherWindow.css';
// API Key: e58676ae0cce98b4b0bfda3483f04916

function WeatherWindow() {
    const [weatherData, setWeather] = useState([]);
    const [city, setCity] = useState('');
    const [typedCity, changeStatus] = useState(false);
    const fetchWeather = async () => {
        console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e58676ae0cce98b4b0bfda3483f04916`)
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e58676ae0cce98b4b0bfda3483f04916`)
        .then(res => res.json())
        .then(res => {
            setWeather(res);
            // console.log(res);
            console.log(weatherData);
        })
        .catch(error => console.log(error))
        .finally(() => console.log("Successful API request!"));
    };
    useEffect(() => { 
        console.log(city);
    });

    const handleSubmit = (e) => {
        changeStatus(true);
        fetchWeather();
      };

    return (
      <div className="weather">
        {typedCity === true && weatherData ? (
        <header className="weather-header">
            <h1>{weatherData.name}: {((weatherData.main.temp - 273.15) * 1.8 + 32).toPrecision(3)}°F</h1>
            <div className="frames">
                <div>{weatherData.weather[0].main}</div>
                <div>Feels Like: {weatherData.main.feels_like}</div>
                <div>{weatherData.weather[0].description}</div>
            </div> 
        </header>
        ) : (
            <p>Loading weather data...</p>
        )}
        <form onSubmit = {handleSubmit}>
                Type City:  <input 
                                onChange = {(e) => setCity(e.target.value)} 
                                value = {city}>
                            </input>
                <button type = 'submit'>Submit</button>
        </form>
      </div>
    );
  }
  export default WeatherWindow;