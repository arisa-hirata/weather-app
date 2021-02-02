import React, { useContext } from 'react';
import Weather from './Weather';
import Chart from './Chart';
import DailyForecast from './DailyForecast';
import { WeatherContext } from './context/WeatherContext';

const MainPage = () => {
    const { weather, forecast } = useContext(WeatherContext);
    return (
        <div>
        {weather.name && forecast.city !== undefined ? (
            <div>
                <Weather />
                <Chart />
                <DailyForecast />
            </div>
            ) : ('')}
        </div>
    );
}

export default MainPage;
