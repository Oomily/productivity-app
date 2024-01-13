import { useState, useEffect } from 'react';
import './WeatherWindow.css';
// API Key: e58676ae0cce98b4b0bfda3483f04916

function WeatherWindow() {
    const [weatherData, setWeather] = useState([]);
    const [city, setCity] = useState('');
    useEffect(() => {
        const fetchWeather = async () => {
            console.log("Fetching Data");
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city}&APPID=e58676ae0cce98b4b0bfda3483f04916`)
                .then(res => res.json())
                .then(res => {
                    // console.log(res);
                    setWeather(res);
            }).catch(error => console.log(error)
        );
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
            <form>
                <label>
                    <div>Type City: <input name="typedCity" 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                    </div>
                </label>
            </form>
        </header>
      </div>
    );
  }
  
  export default WeatherWindow;