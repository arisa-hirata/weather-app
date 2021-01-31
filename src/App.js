import React from 'react';
import NavBar from './components/NavBar';
import Weather from './components/Weather';
import Chart from './components/Chart';
import { WeatherProvider } from './components/context/WeatherContext';
import './App.css';
import "weather-icons/css/weather-icons.css";


function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <NavBar />
        <Weather />
        <Chart />
      </div>
    </WeatherProvider>

  );
}

export default App;
