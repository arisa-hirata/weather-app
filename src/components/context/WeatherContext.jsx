import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherProvider = (props) => {
    const [forecast, setForecast] = useState([]);
    const [city, setCity] = useState('');
    const [url, setUrl] = useState(
        `http://api.openweathermap.org/data/2.5/forecast?q=vancouver&appid=${API_KEY}`
    );
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            try {
                const result = await axios(url);
                setForecast(result.data);
            } catch (error) {
                setIsError(true);
                console.log("error: ", error);
            }
        }
        fetchData();
    }, [url])

    const handleSearchChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
        e.preventDefault();
    }

    return (
        <WeatherContext.Provider
            value={{
                city,
                forecast,
                isError,
                handleSearchChange,
                handleSubmit,
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    )
}
