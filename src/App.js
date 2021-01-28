import React from 'react';
import NavBar from './components/NavBar';
import Weather from './components/Weather';
import { WeatherProvider } from './components/context/WeatherContext';
import './App.css';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <NavBar />
        <Weather />
      </div>
    </WeatherProvider>

  );
}

export default App;
