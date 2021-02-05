import React, { useContext } from 'react';
import Weather from './Weather';
import Chart from './Chart';
import DailyForecast from './DailyForecast';
import { WeatherContext } from './context/WeatherContext';
import '../App.css';

const MainPage = () => {
    const { forecast } = useContext(WeatherContext);
    return (
        <div>
            {forecast.city !== undefined ? (
                <div>
                    <Weather />
                    <Chart />
                    <DailyForecast />
                </div>
            ) : (
                <div style={{marginTop: 100}} className="spinner"></div>
            )}
        </div>
    );
}

export default MainPage;
