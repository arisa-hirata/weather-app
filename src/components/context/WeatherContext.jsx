import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherProvider = (props) => {
    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState(
        `http://api.openweathermap.org/data/2.5/forecast?q=vancouver&appid=${API_KEY}`
    );

    useEffect(async () => {
        console.log('hello!: ', forecast);
        const fetchData = async () => {

            try {
                const result = await axios(forecast);
                setForecast(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [forecast])

    const handleSearchChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        setForecast(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
        e.preventDefault();
    }

    return (
        <WeatherContext.Provider
            value={{
                city,
                forecast,
                handleSearchChange,
                handleSubmit,
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    )
}
