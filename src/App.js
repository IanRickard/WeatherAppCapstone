import './App.css';
import React from 'react';
import WeatherLocation from './WeatherLocation';
import WeatherPlanner from './WeatherPlanner';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <main>
        <h1>Welcome to our Weather App!</h1>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/weatherlocation' element={<WeatherLocation />} />
            <Route path='/weatherplanner' element={<WeatherPlanner />} />
          </Routes>
      </main>
    </Router>
  );
}

export default App;
