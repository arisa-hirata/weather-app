import React, { useState, createContext } from 'react';
export const WeatherContext = createContext();

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherProvider = (props) => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState([]);

    const getWeather = async () => {
        try {
            const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

            const weatherData = await fetch(weatherUrl);
            const { weather } = await weatherData.json();
            console.log("weather: ", weather)
            setWeather(weather[0].description);

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
                handleSearchChange,
                handleSubmit,
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    )
}
