import React, { useContext } from 'react';
import { WeatherContext } from './context/WeatherContext';
import '../App.css';

const WEATHER_ICONS = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-rain",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-cloud",
    ClearNight: "wi-night-clear",
    CloudyNight: "wi-night-alt-cloudy",
    FoggyNight: "wi-night-fog",
    SonwyNight: "wi-night-snow",
    RainyNight: "wi-night-rain",
    DrizzleNight: "wi-night-showers",
    ThunderstormNight: "wi-night-thunderstorm"
}

const Weather = () => {
    const { weather } = useContext(WeatherContext);

        const weatherIcon = weather.weather[0].id ;

        if (weatherIcon >= 200 && weatherIcon < 232) {
            if (weather.sys.sunset < weather.dt || weather.dt <= weather.sys.sunrise) {
                var icon = WEATHER_ICONS.ThunderstormNight;
            } else {
                var icon = WEATHER_ICONS.Thunderstorm;
            }
        } else if (weatherIcon >= 300 && weatherIcon <= 321) {
            if (weather.sys.sunset < weather.dt || weather.dt <= weather.sys.sunrisee) {
                var icon = WEATHER_ICONS.DrizzleNight;
            } else {
                var icon = WEATHER_ICONS.Drizzle;
            }
        } else if (weatherIcon >= 500 && weatherIcon <= 521) {
            if (weather.sys.sunset < weather.dt || weather.dt <= weather.sys.sunrise) {
                var icon = WEATHER_ICONS.RainyNight;
            } else {
                var icon = WEATHER_ICONS.Rain;
            }
        } else if (weatherIcon >= 600 && weatherIcon <= 622) {
            if (weather.sys.sunset < weather.dt || weather.dt <= weather.sys.sunrise) {
                var icon = WEATHER_ICONS.SonwyNight;
            } else {
                var icon = WEATHER_ICONS.Snow;
            }
        } else if (weatherIcon >= 701 && weatherIcon <= 781) {
            if (weather.sys.sunset < weather.dt || weather.dt <= weather.sys.sunrise) {
                var icon = WEATHER_ICONS.FoggyNight;
            } else {
                var icon = WEATHER_ICONS.Atmosphere;
            }
        } else if (weatherIcon === 800 && weather.sys.sunrise <= weather.dt < weather.syssunset) {
            if (weather.sys.sunset < weather.dt || weather.dt <= weather.sys.sunrise) {
                var icon = WEATHER_ICONS.ClearNight;
            } else {
                var icon = WEATHER_ICONS.Clear;
            }
        } else if (weatherIcon >= 801 && weatherIcon <= 804) {
            if (weather.sys.sunset < weather.dt || weather.dt <= weather.sys.sunrise) {
                var icon = WEATHER_ICONS.CloudyNight;
            } else {
                var icon = WEATHER_ICONS.Clouds;
            }
        }

    return (
        <div className="content-container">
                <div>
                    <h1 style={{ marginTop: 100 }}>{weather.name}, {weather.sys.country}</h1>
                    <h3>{weather.weather[0].main}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80 }}>
                        <div>
                            <p><i className={`wi ${icon}`} style={{fontSize: 80}}></i></p>
                        </div>
                        <div>
                            <h1 style={{fontSize: 50}}>{Math.floor(weather.main.temp-273.15)}°</h1>
                        </div>
                        {/*<p>Feels like {feelslike} ℃</p>*/}
                    </div>
                    <div style={{ display: 'flex' , justifyContent: 'space-evenly', height: 50}}>
                        <h4>H: {Math.floor(weather.main.temp_max-273.15)}°</h4>
                        <h4>L: {Math.floor(weather.main.temp_min-273.15)}°</h4>
                    </div>
                    <h3>{weather.weather[0].description} currently.</h3>
                </div>
        </div>
    );
}

export default Weather;
