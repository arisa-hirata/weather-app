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

const DailyForecast = (props) => {
  const { forecast } = useContext(WeatherContext);
  console.log("forecast: ", forecast.list);

  let forecastList = [];

  for (var i = 0; i < forecast.list.length; i += 8) {
    // console.log("forecast.list: ", forecast.list[i].dt_txt);
    forecastList.push(
      {
        icon: forecast.list[i].weather[0].id,
        date: forecast.list[i].dt_txt,
        temp: Math.floor(forecast.list[i].main.temp - 273.15),
        // high: forecast.list[i].main.temp_max - -273.15,
        // low: forecast.list[i].main.temp_min - -273.15,
        rain: Math.floor(forecast.list[i].pop*100),
        humid: forecast.list[i].main.humidity,
      }
    )
  }
  // console.log("forecast.list: ", forecastList[0].humid);
  console.log("forecast.list: ", forecastList[4].icon);

  const today = new Date().getDay();
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const iconSwitch = (Id) => {
    let icon ;
      if (Id >= 200 && Id < 232) {
        icon = WEATHER_ICONS.Thunderstorm
      } else if (Id >= 300 && Id <= 321) {
        icon = WEATHER_ICONS.Thunderstorm
      } else if (Id >= 500 && Id <= 521) {
        icon = WEATHER_ICONS.Rain
      } else if (Id >= 600 && Id <= 622) {
        icon = WEATHER_ICONS.Snow
      } else if (Id >= 701 && Id <= 781) {
        icon = WEATHER_ICONS.Atmosphere
      } else if (Id === 800) {
        icon = WEATHER_ICONS.Clear
      } else if (Id >= 801 && Id <= 804) {
        icon = WEATHER_ICONS.Clouds
      }

    return icon
  }

    return (
        <div className="table-container">
          <h2>5 Days Forecast</h2>
          <table class="table_box">
            <tr>
              <th></th>
              <th>Date</th>
              <th>Temp (°)</th>
              <th>Rain (%)</th>
              <th>Humid (%)</th>
            </tr>
            <tr>
              <td><i className={`wi ${iconSwitch(forecastList[0].icon)}`}></i></td>
              <td>Today</td>
              <td>{forecastList[0].temp}°</td>
              <td>{forecastList[0].rain}%</td>
              <td>{forecastList[0].humid}%</td>
            </tr>
            <tr>
              <td><i className={`wi ${iconSwitch(forecastList[1].icon)}`}></i></td>
              <td>{week[today + 1 > 6 ? today - 6 : today + 1]}</td>
              <td>{forecastList[1].temp}°</td>
              <td>{forecastList[1].rain}%</td>
              <td>{forecastList[1].humid}%</td>
            </tr>
            <tr>
              <td><i className={`wi ${iconSwitch(forecastList[2].icon)}`}></i></td>
              <td>{week[today + 2 > 6 ? today - 5 : today + 2]}</td>
              <td>{forecastList[2].temp}°</td>
              <td>{forecastList[2].rain}%</td>
              <td>{forecastList[2].humid}%</td>
            </tr>
            <tr>
              <td><i className={`wi ${iconSwitch(forecastList[3].icon)}`}></i></td>
              <td>{week[today+3 > 6 ? today-4: today+3]}</td>
              <td>{forecastList[3].temp}°</td>
              <td>{forecastList[3].rain}%</td>
              <td>{forecastList[3].humid}%</td>
            </tr>
            <tr>
              <td><i className={`wi ${iconSwitch(forecastList[4].icon)}`}></i></td>
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
