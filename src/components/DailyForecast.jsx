import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#F5F5F5",
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: 650,
    minWidth: 80
  },
  table: {
    maxWidth: 650,
  },
});

function createData(icon, calories, fat, carbs, protein) {
    return { icon, calories, fat, carbs, protein };
}

const DailyForecast = (props) => {
  const classes = useStyles();

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
  console.log("forecast.list: ", forecastList[1].humid);

  const today = new Date().getDay();
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const rows = [
    createData(forecastList[0].icon, 'Today', forecastList[0].temp, forecastList[0].rain, forecastList[0].humid),
    createData(
      forecastList[1].icon,
      week[today + 1 > 6 ? today - 6 : today + 1],
      forecastList[1].temp,
      forecastList[1].rain,
      forecastList[1].humid
    ),
    createData(
      forecastList[2].icon,
      week[today + 2 > 6 ? today - 5 : today + 2],
      forecastList[2].temp,
      forecastList[2].rain,
      forecastList[2].humid
    ),
    createData(
      forecastList[3].icon,
      week[today+3 > 6 ? today-4: today+3],
      forecastList[3].temp,
      forecastList[3].rain,
      forecastList[3].humid
    ),
    createData(
      forecastList[4].icon,
      week[today+4 > 6 ? today-3: today+4],
      forecastList[4].temp,
      forecastList[4].rain,
      forecastList[4].humid
    ),
  ];

    return (
        <div className="table-container">
          <h2>5 Days Forecast</h2>
          <TableContainer component={Paper} variant="outlined" className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell></StyledTableCell>
                      <StyledTableCell align="right">Date</StyledTableCell>
                      <StyledTableCell align="right">Temp(°)</StyledTableCell>
                      <StyledTableCell align="right">Rain(%)</StyledTableCell>
                      <StyledTableCell align="right">Humid(%)</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                {rows.map((row) => (
                      <TableRow key={row.icon} hover>
                        <TableCell component="th" scope="row">
                          <i className={`wi ${
                            row.icon >= 200 && row.icon < 232 ? WEATHER_ICONS.Thunderstorm
                              : row.icon >= 300 && row.icon <= 321 ? WEATHER_ICONS.Drizzle
                              : row.icon >= 500 && row.icon <= 521 ? WEATHER_ICONS.Rain
                              : row.icon >= 600 && row.icon <= 622 ? WEATHER_ICONS.Snow
                              : row.icon >= 701 && row.icon <= 781 ? WEATHER_ICONS.Atmosphere
                              : row.icon === 800 ? WEATHER_ICONS.Clear
                              : WEATHER_ICONS.Clouds
                          }`}></i>
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}°</TableCell>
                        <TableCell align="right">{row.carbs}%</TableCell>
                        <TableCell align="right">{row.protein}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
          </TableContainer>
        </div>
    );
}

export default DailyForecast;
