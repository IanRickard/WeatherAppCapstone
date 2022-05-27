import './App.css';
import React from 'react';
import WeatherLocation from './components/WeatherLocation';
import WeatherPlanner from './components/WeatherPlanner';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

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
