import React from "react";
import {worldCities} from "../data/city-list"

export default function WeatherLocation(){
  function generateRandomCities(){

    
    let randomCities=[];
    for(let i=0; randomCities.length<5; i++){
      const randomIndex = Math.floor(Math.random()*worldCities.length);
      let newCity=worldCities[randomIndex];
      if(!randomCities.includes(newCity)){
        randomCities.push(newCity);
      }
    }
    return randomCities;
  }

  const handleClick = (e) =>{
    
      const apiKey=process.env.REACT_APP_WEATHERAPP_API_KEY;
      const loc=e.target.id;
      const stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
      fetch(stringPassIn)
      .then((res) => res.json())
      .then((data) => {
        const temperature = Math.trunc(data.main.temp) - 273;
        const description = data.weather[0].description;
        let searchResult = `<p>Current weather in ${loc}: </p> <p>temperature <b>${temperature} °C</b><br>${description}</p>`;
        document.getElementById("searchResult").innerHTML=searchResult;
      })
      .catch((err) => console.log(err));
      e.preventDefault();
  }
  
  const cityArr=generateRandomCities();
  let cityList=cityArr.map((element)=>{return (
    <li key={element} onClick={handleClick} id={element}>{element}</li>
    );});

  return (
    <div>
      <h2>
        Click on any location to check the weather!
      </h2>
      <div>
        <ul>{cityList}</ul>
        <p id="searchResult"></p>
      </div>
    </div>
  )
}