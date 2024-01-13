import { useState, useEffect } from 'react';
// API Key: e58676ae0cce98b4b0bfda3483f04916

function WeatherWindow() {
    const [weatherData, setWeather] = useState([]);    
    useEffect(() => {
        const fetchWeather = async () => {
            console.log("Fetching Data");
            await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e58676ae0cce98b4b0bfda3483f04916')
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    setWeather(res);
                    // console.log(`Current weather is ${res.weather[0].main} with ${res.weather[0].description}`);
                    // console.log(`Temperature is ${res.main.temp} but feels like ${res.main.feels_like}`);
            }).catch(error => {
                console.log("Error in Data");
                console.log(error);
        } );
    }
    fetchWeather();
    },[]);
    return (
      <div className="weather">
        <header className="weather-header">
            <h1>{weatherData.name}: {((weatherData.main.temp - 273.15) * 1.8 + 32).toPrecision(3)}°F</h1>
            <div className="frames">
                <div>{weatherData.weather[0].main}</div>
                <div>Feels Like: {weatherData.main.feels_like}</div>
                <div>{weatherData.weather[0].description}</div>
            </div> 
        </header>
      </div>
    );
  }
  
  export default WeatherWindow;