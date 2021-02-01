import React, { useState, createContext } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherProvider = (props) => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);

    const getWeather = async () => {
        try {
            const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

            const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

            const weatherData = await axios(weatherUrl);
            const forecastData = await axios(forecastUrl);
            // console.log("weatherData: ", weatherData.data);
            console.log("forecastData: ", forecastData.data);

            setWeather(weatherData.data);
            setForecast(forecastData.data);

        } catch (e) {
            console.log("error: ", e);
        }
    }

    const handleSearchChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather();
    }

    return (
        <WeatherContext.Provider
            value={{
                city,
                weather,
                forecast,
                handleSearchChange,
                handleSubmit,
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    )
}
