import React from "react";
import { CityName } from "./data/city-name";

export default function WeatherLocation(){


  // Generate 5 cities randomly from a list of 100 popular tourist destionation-->Fulfilled by component <CityName />
  // 

  // On click, fetch weather data from API


  return (
    <div>
      <h2>
        Click on any location to check the weather!
      </h2>
      <CityName />
    </div>
  )
}