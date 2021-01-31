import React from 'react';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import { WeatherProvider } from './components/context/WeatherContext';
import './App.css';
import "weather-icons/css/weather-icons.css";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <NavBar />
        <MainPage />
      </div>
    </WeatherProvider>

  );
}

export default App;
