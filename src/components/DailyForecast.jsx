import React, { useContext } from 'react';
import { WeatherContext } from './context/WeatherContext';
import { getIcon } from '../utils';
import '../App.css';

const DailyForecast = (props) => {
  const { forecast } = useContext(WeatherContext);
  let forecastList = [];

  for (var i = 0; i < forecast.list.length; i += 8) {
    forecastList.push(
      {
        icon: forecast.list[i].weather[0].id,
        date: forecast.list[i].dt_txt,
        temp: Math.floor(forecast.list[i].main.temp - 273.15),
        rain: Math.floor(forecast.list[i].pop*100),
        humid: forecast.list[i].main.humidity,
      }
    )
  }

  const today = new Date().getDay();
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="table-container">
          <h2>5 Days Forecast</h2>
          <table className="table_box">
            <tr>
              <th>Weather</th>
              <th>Date</th>
              <th>Temp (°)</th>
              <th>Rain (%)</th>
              <th>Humid (%)</th>
            </tr>
            <tr>
              <td><i className={`wi ${getIcon(forecastList[0].icon)} icon`}></i></td>
              <td>Today</td>
              <td>{forecastList[0].temp}°</td>
              <td>{forecastList[0].rain}%</td>
              <td>{forecastList[0].humid}%</td>
            </tr>
            <tr>
              <td><i className={`wi ${getIcon(forecastList[1].icon)} icon`}></i></td>
              <td>{week[today + 1 > 6 ? today - 6 : today + 1]}</td>
              <td>{forecastList[1].temp}°</td>
              <td>{forecastList[1].rain}%</td>
              <td>{forecastList[1].humid}%</td>
            </tr>
            <tr>
              <td><i className={`wi ${getIcon(forecastList[2].icon)} icon`}></i></td>
              <td>{week[today + 2 > 6 ? today - 5 : today + 2]}</td>
              <td>{forecastList[2].temp}°</td>
              <td>{forecastList[2].rain}%</td>
              <td>{forecastList[2].humid}%</td>
            </tr>
            <tr>
              <td><i className={`wi ${getIcon(forecastList[3].icon)} icon`}></i></td>
              <td>{week[today+3 > 6 ? today-4: today+3]}</td>
              <td>{forecastList[3].temp}°</td>
              <td>{forecastList[3].rain}%</td>
              <td>{forecastList[3].humid}%</td>
            </tr>
            <tr>
              <td><i className={`wi ${getIcon(forecastList[4].icon)} icon`}></i></td>
              <td>{week[today+4 > 6 ? today-3: today+4]}</td>
              <td>{forecastList[4].temp}°</td>
              <td>{forecastList[4].rain}%</td>
              <td>{forecastList[4].humid}%</td>
            </tr>
          </table>

        </div>
    );
}

export default DailyForecast;
