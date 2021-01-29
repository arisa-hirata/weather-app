import React, { useContext, useState } from 'react';
import { WeatherContext } from './context/WeatherContext';
import '../App.css';

const WEATHER_ICONS = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
    ClearNight: "wi-night-clear",
    CloudyNight: "wi-night-alt-cloudy",
    FoggyNight: "wi-night-fog",
    SonwyNight: "wi-night-snow",
    RaintNight: "wi-night-rain",
    DrizzleNight: "wi-night-showers",
    ThunderstormNight: "wi-night-thunderstorm"
}

const Weather = () => {
    const
        {
            weather,
            cityName,
            country,
            weatherMain,
            weatherIcon,
            temp,
            feelslike,
            tempMax,
            tempMin,
            dt,
            sunrise,
            sunset
        } = useContext(WeatherContext);

    if (weatherIcon >= 200 && weatherIcon < 232) {
        if (sunset < dt) {
            var icon = WEATHER_ICONS.ThunderstormNight;
        } else {
            var icon = WEATHER_ICONS.Thunderstorm;
        }
    } else if (weatherIcon >= 300 && weatherIcon <= 321) {
        if (sunset < dt) {
            var icon = WEATHER_ICONS.DrizzleNight;
        } else {
            var icon = WEATHER_ICONS.Drizzle;
        }
    } else if (weatherIcon >= 500 && weatherIcon <= 521) {
        if (sunset < dt) {
            var icon = WEATHER_ICONS.Rainy;
        } else {
            var icon = WEATHER_ICONS.Rain;
        }
    } else if (weatherIcon >= 600 && weatherIcon <= 622) {
        if (sunset < dt) {
            var icon = WEATHER_ICONS.SonwyNight;
        } else {
            var icon = WEATHER_ICONS.Snow;
        }
    } else if (weatherIcon >= 701 && weatherIcon <= 781) {
        if (sunset < dt) {
            var icon = WEATHER_ICONS.FoggyNight;
        } else {
            var icon = WEATHER_ICONS.Atmosphere;
        }
    } else if (weatherIcon === 800 && sunrise <= dt < sunset) {
        if (sunset < dt) {
            var icon = WEATHER_ICONS.ClearNight;
        } else {
            var icon = WEATHER_ICONS.Clear;
        }
    } else if (weatherIcon >= 801 && weatherIcon <= 804) {
        if (sunset < dt) {
            var icon = WEATHER_ICONS.CloudyNight;
        } else {
            var icon = WEATHER_ICONS.Clouds;
        }
    }

    return (
        <div className="weather_container">
            <div>
                <h1 style={{ marginTop: 100 }}>{cityName}, {country}</h1>
                <div>
                    <p><i className={`wi ${icon}`} style={{fontSize: 80}}></i></p>
                    {weatherMain}
                    {temp}
                    <p>Feels like {feelslike} ℃</p>

                </div>
                <h4>Today: {weather} currently. The highest will be {tempMax} ℃. The lowest will be {tempMin}.</h4>
            </div>
        </div>
    );
}

export default Weather;
