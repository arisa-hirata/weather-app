import React, { useContext } from 'react';
import { WeatherContext } from './context/WeatherContext';
import { WEATHER_ICONS } from '../utils';
import '../App.css';

const Weather = () => {
    const { forecast } = useContext(WeatherContext);

    const getIcon = (Id) => {
        let icon;
        const sunrise = forecast.city.sunrise;
        const sunset = forecast.city.sunset;
        const dt = forecast.list[0].dt;
        if (Id >= 200 && Id < 232) {
            if (sunset < dt || dt <= sunrise) {
                icon = WEATHER_ICONS.ThunderstormNight;
            } else {
                icon = WEATHER_ICONS.Thunderstorm;
            }
        } else if (Id >= 300 && Id <= 321) {
            if (sunset < dt || dt <= sunrise) {
                icon = WEATHER_ICONS.DrizzleNight;
            } else {
                icon = WEATHER_ICONS.Drizzle;
            }
        } else if (Id >= 500 && Id <= 521) {
            if (sunset < dt || dt <= sunrise) {
                icon = WEATHER_ICONS.RainyNight;
            } else {
                icon = WEATHER_ICONS.Rain;
            }
        } else if (Id >= 600 && Id <= 622) {
            if (sunset < dt || dt <= sunrise) {
                icon = WEATHER_ICONS.SonwyNight;
            } else {
                icon = WEATHER_ICONS.Snow;
            }
        } else if (Id >= 701 && Id <= 781) {
            if (sunset < dt || dt <= sunrise) {
                icon = WEATHER_ICONS.FoggyNight;
            } else {
                icon = WEATHER_ICONS.Atmosphere;
            }
        } else if (Id === 800) {
            if (sunset < dt || dt <= sunrise) {
                icon = WEATHER_ICONS.ClearNight;
            } else {
                icon = WEATHER_ICONS.Clear;
            }
        } else if (Id >= 801 && Id <= 804) {
            if (sunset < dt || dt <= sunrise) {
                icon = WEATHER_ICONS.CloudyNight;
            } else {
                icon = WEATHER_ICONS.Clouds;
            }
        }
        return icon
    }

    return (
        <div className="content-container">
                <div>
                    <h1>{forecast.city.name}, {forecast.city.country}</h1>
                    <h3>{forecast.list[0].weather[0].main}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80 }}>
                        <div>
                            <p><i className={`wi ${getIcon(forecast.list[0].weather[0].id)}`} style={{fontSize: 80}}></i></p>
                        </div>
                        <div>
                            <h1 style={{fontSize: 50}}>{Math.floor(forecast.list[0].main.temp-273.15)}°</h1>
                        </div>
                    </div>
                    {/*<div style={{ display: 'flex' , justifyContent: 'space-evenly', height: 50}}>
                        <h4>H: {Math.floor(weather.main.temp_max-273.15)}°</h4>
                        <h4>L: {Math.floor(weather.main.temp_min-273.15)}°</h4>
    </div>*/}
                    <h3>{forecast.list[0].weather[0].description} currently.</h3>
                </div>
        </div>
    );
}

export default Weather;
