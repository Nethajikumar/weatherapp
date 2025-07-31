import React, { useEffect, useRef, useState } from "react"
import './Weather.css'
import searchIcn from '../assets/search.png'
import cloudyIcn from '../assets/cloudy.png'
import cloudsIcn from '../assets/clouds.png'
import drizzleIcn from '../assets/drizzle.png'
import humidityIcn from '../assets/humidity.png'
import rainIcn from '../assets/rain.png'
import snowIcn from '../assets/snow.png'
import sunIcn from '../assets/sun.png'
import windIcn from '../assets/wind.png'
import mistIcn from '../assets/mist.png'
import sunshowerIcn from '../assets/sun-shower.png'
import thunderIcn from '../assets/thunderstorm.png'
import twoIcn from '../assets/two.png'


const Weather = () => {

    const inputRef = useRef()

    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d": sunIcn,
        "01n": sunIcn,
        "02d": cloudyIcn,
        "02n": cloudyIcn,
        "03d": cloudsIcn,
        "03n": cloudsIcn,
        "04d": twoIcn,
        "04n": twoIcn,
        "09d": drizzleIcn,
        "09n": sunshowerIcn,
        "10d": rainIcn,
        "10n": rainIcn,
        "11d": thunderIcn,
        "11n": thunderIcn,
        "13d": snowIcn,
        "13n": snowIcn,
        "50d": mistIcn,
        "50n": mistIcn,
    }

    const search = async (city) => {
        if (city == "") {
            alert("Enter City Name");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }


            console.log(data);
            const icon = allIcons[data.weather[0].icon] || sunIcn;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                description: data.weather[0].description,
                icon: icon,
            })

        } catch (error) {
            setWeatherData(false);
            console.error("Error in fetching weather data");
        }
    }


    useEffect(() => {
        search("Tiruvannamalai");

    }, [])

    return (
        <div className='weather'>
            <h1 className="app-title">Weather Forecast</h1>
            <div className="search-bar">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter city name"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            search(inputRef.current.value);
                        }
                    }}
                />
                <img
                    src={searchIcn}
                    alt="search-icon"
                    onClick={() => search(inputRef.current.value)}
                />
            </div>


            {weatherData ? <>
                <img src={weatherData.icon} alt="" className="weather-icon" />
                <p className="temperature">{weatherData.temperature}°C</p>
                <p className="location">{weatherData.location}</p>
                <h2 className="location">{weatherData.name}</h2>
                <p className="description text-lg capitalize">
                    {weatherData.description}
                </p>


                <div className="weather-data">
                    <div className="col">
                        <img src={humidityIcn} alt="" />
                        <div>
                            <p>{weatherData.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={windIcn} alt="" />
                        <div>
                            <p>{weatherData.windSpeed}Km/h</p>
                            <span>windspeed</span>
                        </div>
                    </div>
                </div>
            </> : <></>}


        </div>
    )
}

export default Weather