import React, { useContext } from 'react';
import Weather from './Weather';
import Chart from './Chart';
import DailyForecast from './DailyForecast';
import { WeatherContext } from './context/WeatherContext';
import '../App.css';

const MainPage = () => {
    const { forecast　} = useContext(WeatherContext);
    return (
        <div className="main-page">

            {/*{isError && <div>Something went to wrong ...</div>}*/}
            {forecast.city !== undefined ? (
                <div>
                    <Weather />
                    <Chart />
                    <DailyForecast />
                </div>
            ) : (
                <div className="spinner"></div>
            )}
        </div>
    );
}

export default MainPage;
