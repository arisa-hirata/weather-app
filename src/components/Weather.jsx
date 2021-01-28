import React, { useContext } from 'react';
import { WeatherContext } from './context/WeatherContext';

const Weather = () => {
    const { weather } = useContext(WeatherContext);;
    return (
        <div>
            <h1 style={{marginTop: 100}}>Weather</h1>
            {weather}
        </div>
    );
}

export default Weather;
