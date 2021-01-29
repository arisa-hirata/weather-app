import React, { useState, createContext } from 'react';
export const WeatherContext = createContext();

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherProvider = (props) => {
    const [city, setCity] = useState('');
    const [cityName, setCityName] = useState('');
    const [country, setCountry] = useState([]);
    const [weather, setWeather] = useState([]);
    const [weatherMain, setWeatherMain] = useState([]);
    const [weatherIcon, setWeatherIcon] = useState([]);
    const [temp, setTemp] = useState([]);
    const [feelslike, setFeelsLike] = useState([]);
    const [tempMax, setTempMax] = useState([]);
    const [tempMin, setTempMin] = useState([]);
    const [dt, setDt] = useState([]);
    const [sunrise, setSunrise] = useState([]);
    const [sunset, setSunset] = useState([]);

    const getWeather = async () => {
        try {
            const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

            const weatherData = await fetch(weatherUrl);
            const { weather, main, name, sys, dt } = await weatherData.json();
            console.log("weather: ", weather);
            console.log("main: ", main);
            console.log("weatherID: ", weather[0].id);
            // console.log("dt: ", new Date(dt * 1000));
            console.log("dt: ", dt);
            console.log("sunrise: ", sys.sunrise);
            console.log("sunset: ", sys.sunset);

            setCityName(name);
            setCountry(sys.country);
            setWeatherMain(weather[0].main);
            setWeather(weather[0].description);
            setWeatherIcon(weather[0].id);
            setTemp(main.temp);
            setFeelsLike(main.feels_like);
            setTempMax(main.temp_max);
            setTempMin(main.temp_min);

            setDt(dt);
            setSunrise(sys.sunrise);
            setSunset(sys.sunset);

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
                cityName,
                country,
                city,
                weather,
                weatherMain,
                weatherIcon,
                temp,
                feelslike,
                tempMax,
                tempMin,
                dt,
                sunrise,
                sunset,
                handleSearchChange,
                handleSubmit,
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    )
}
